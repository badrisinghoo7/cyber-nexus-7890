const express = require("express")
const { UserModel } = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { BlacklistModel } = require("../model/blackList.model")

const userRouter = express.Router()

userRouter.post("/register",async(req,res)=>{
    const {username,email,pass}=req.body
  try {
    const user = await UserModel.findOne({email})
    if(user){
        res.send({"msg":"User Allready exist..."})
    }else{
        if(checkPass(pass)){
            bcrypt.hash(pass, 5, async(err, hash)=> {
                if(err){
                    res.status(200).send({"err":"Password Cannot Hash"})
                }else{
                   const registerUser = new UserModel({username,email,pass:hash})
                   await registerUser.save()
                   res.status(200).send({"msg":"Registration Successfull..."})
                }
            });
        }else{
            res.send("pass should contain atleast one Uppercase one special symbol and one number")
        }
    }
  } catch (error) {
    res.status(400).send({"err":error})
  }
})


userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
     try {
        const user = await UserModel.findOne({email})
        // console.log("user",user)
        if(user){
            bcrypt.compare(pass, user.pass, (err, result)=> {
                if(result){
                    const token = jwt.sign({name:"Harsh"},"ranjan",{expiresIn:"7d"})
                    const refreshToken=jwt.sign({batch:"NEM111"},"masai",{expiresIn:"28d"})
                    res.status(200).send({"msg":"Login Successfull...","token":token,"refreshToken":refreshToken})
                }else{
                    res.status(200).send({"msg":"Wrong Credential..."})
                }
            });
        }else{
            res.status(200).send({"msg":"User Doesn't Exist"})
        }
         } catch (error) {
        res.status(400).send({"err":err})
     }
})

userRouter.get("/logout",async(req,res)=>{
try {
    const token = req.headers.authorization?.split(" ")[1]
    // console.log("token in Logout",token)
    if(token){
        const newBlack =  new BlacklistModel({blacklist:[token]})
        await newBlack.save()
        res.send({"msg":"Logout Successfull..."})
    }
} catch (error) {
    res.send({"err":error})
}
})
function checkPass(pass){
    if(pass.length<8){
        return false
    }
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let spec = "~!@#$%^%&*()_+=-[]{}";
    let flag1=false
    let flag2=false
    let flag3=false
    for(let i=0;i<pass.length;i++){
        if(alpha.includes(pass[i])){
            flag1 = true
        }
        if(num.includes(pass[i])){
            flag2 = true
        }
        if(spec.includes(pass[i])){
            flag3 = true
        }
    }
    if(flag1 && flag2 && flag3){
        return true
    }else{
        false
    }
}

module.exports={userRouter}