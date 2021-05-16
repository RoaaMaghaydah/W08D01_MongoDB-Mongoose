const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task:{type:String},
    description:{type:String},
    deadline:{type:Date},
    isCompleted:{type:Boolean},
    priority:{type:String}
})

module.exports = mongoose.model("toDo",todoSchema)
