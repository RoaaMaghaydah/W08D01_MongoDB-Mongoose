const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    task:{},
    description:{ },
     deadline:{},
    isCompleted:{},
    priority:{}
})
