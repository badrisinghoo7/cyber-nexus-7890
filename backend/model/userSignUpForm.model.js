const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:String,
    first_name:String,
    last_name:String,
    email:String,
    pass:String,
    address:String,
    city:String,
    state:String,
    Dob:Number,
    gender:String,
    contact:Number,
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}