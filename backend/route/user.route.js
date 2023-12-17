const express = require("express");
// const { UserModel } = require("../model/userSignUpForm.model");
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { activityTracker } = require("../middleware/activityTracker");
const { timeLogger } = require("../middleware/timeLogger");

const userRouter = express.Router();
// userRouter.use(activityTracker);
// userRouter.use(timeLogger);

userRouter.post("/register", async (req, res) => {
  const { username, email, pass } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    console.log(user);
    if (user) {
      res.send({ msg: "User Allready exist..." });
    } else {
      if (checkPass(pass)) {
        bcrypt.hash(pass, 5, async (err, hash) => {
          if (err) {
            res.status(200).send({ err: "Password Cannot Hash" });
          } else {
            const registerUser = new UserModel({ username, email, pass: hash });
            await registerUser.save();
            res
              .status(200)
              .send({ msg: "Registration Successfull...", registerUser });
          }
        });
      } else {
        res.send(
          "password atleast contain 8 charactrs, atleast one upper case, one number and special character"
        );
      }
    }
  } catch (error) {
    res.status(400).send({ err: "error" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    // console.log("user",user)
    if (user) {
      bcrypt.compare(pass, user.pass, (err, result) => {
        if (result) {
          const token = jwt.sign({ name: "Harsh" }, "masai", {
            expiresIn: "7d",
          });
          const refreshToken = jwt.sign({ batch: "NEM111" }, "school", {
            expiresIn: "28d",
          });
          res.status(200).send({
            msg: "Login Successfull...",
            token: token,
            refreshToken: refreshToken,
          });
        } else {
          res.status(200).send({ msg: "Wrong Credential..." });
        }
      });
    } else {
      res.status(200).send({ msg: "User Doesn't Exist" });
    }
  } catch (error) {
    res.status(400).send({ err: err });
  }
});

userRouter.get("/logout", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    // console.log("token in Logout",token)
    if (token) {
      const decoded = jwt.verify(token, "masai");
      res.send({ msg: "Logout Successfull..." });
    }
  } catch (error) {
    res.send({ err: error });
  }
});
function checkPass(pass) {
  if (pass.length < 8) {
    return false;
  }
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num = "0123456789";
  let spec = "~!@#$%^%&*()_+=-[]{}";
  let flag1 = false;
  let flag2 = false;
  let flag3 = false;
  for (let i = 0; i < pass.length; i++) {
    if (alpha.includes(pass[i])) {
      flag1 = true;
    }
    if (num.includes(pass[i])) {
      flag2 = true;
    }
    if (spec.includes(pass[i])) {
      flag3 = true;
    }
  }
  if (flag1 && flag2 && flag3) {
    return true;
  } else {
    false;
  }
}

module.exports = { userRouter };

/*

---





--


*/
// const express = require("express");

// const { UserModel } = require("../model/user.model");
// const bcrypt = require("bcrypt");
// const userRouter = express.Router();
// const jwt = require("jsonwebtoken");

// userRouter.get("/", async (req, res) => {
//   try {
//     const users = await UserModel.find();
//     res.status(200).send(users);
//   } catch (error) {
//     res.status(400).send({ error: error });
//   }
// });

// userRouter.post("/register", async (req, res) => {
//   const {
//     username,

//     email,
//     pass,
//   } = req.body;
//   try {
//     bcrypt.hash(pass, 5, async (err, hash) => {
//       if (err) {
//         res.status(200).send({ error: err });
//       } else {
//         const user = new UserModel({
//           username,
//           email,
//           pass: hash,
//         });
//         await user.save();
//         res.status(200).send({ msg: "A new user has been registered" });
//       }
//     });
//   } catch (error) {
//     res.status(400).send({ error: err });
//   }
// });

// userRouter.post("/login", async (req, res) => {
//   const { username, email, pass } = req.body;
//   try {
//     const user = await UserModel.findOne({ email });
//     bcrypt.compare(pass, user.pass, async (err, result) => {
//       if (result) {
//         const token = jwt.sign(
//           { userID: user._id, username: user.username },
//           "masai"
//         );
//         res.status(200).send({ msg: "Login Successfull !", token: token });
//       } else {
//         res.status(200).send({ msg: "Wrong Credentials" });
//       }
//     });
//   } catch (error) {
//     res.status(400).send({ error: error });
//   }
// });

// module.exports = {
//   userRouter,
// };
