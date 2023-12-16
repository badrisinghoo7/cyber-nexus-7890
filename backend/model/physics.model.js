const mongoose = require("mongoose");

const physicsSchema = mongoose.Schema(
  {
    subjectName: String,
    description: String,
    image: String,
  },
  {
    versionKey: false,
  }
);

const PhysicsModel = mongoose.model("physic", physicsSchema);

module.exports = {
    PhysicsModel,
};

/*first -  total subjects ka schema bnana hai
    -MathsSchema
    -physicsSchema
    -chemistrySchema
    -englishSchema
    -hindiSchema
    -SolcialStudiesSchema
*/
