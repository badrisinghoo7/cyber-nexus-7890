const mongoose = require("mongoose");

const englishSchema = mongoose.Schema(
  {
    subjectName: String,
    description: String,
    image: String,
  },
  {
    versionKey: false,
  }
);

const EnglishModel = mongoose.model("english", englishSchema);

module.exports = {
  EnglishModel,
};
