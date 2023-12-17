const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    question:String,
    answer:String,
    subject:String,
 },{
    versionKey:false
})

const NoteModel=mongoose.model("note",noteSchema)
module.exports={
    NoteModel 
}