const mongoose = require("mongoose");

const mathsSchema = mongoose.Schema(
  {
    subjectName: String,
    description: String,
    image: String,
  },
  {
    versionKey: false,
  }
);

const MathsModel = mongoose.model("math", mathsSchema);

module.exports = {
  MathsModel,
};


