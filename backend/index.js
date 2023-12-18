const express = require("express");
const cors = require("cors");
const { userRouter } = require("./route/user.route.js");
const jwt = require("jsonwebtoken");
const { subjectsRouter } = require("./route/subjects.routes");
const { connection } = require("mongoose");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/subjects", subjectsRouter);

app.get("/", (req, res) => {
  res.send({ msg: "Thsi is a Home Route" });
});

app.get("/refreshtoken", (req, res) => {
  const refreshToken = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(refreshToken, "school");
  if (decoded) {
    const token = jwt.sign({ name: "Harsh" }, "masai", { expiresIn: "28d" });
    res.status(200).send({ token: token });
  } else {
    res.send({ msg: "Please login" });
  }
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("MongoDb is connected");

    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
