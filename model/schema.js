const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    "name":{type:String},
    "cslot":{type:Array},
},{
    collection: "students_schedule"
});

module.exports = mongoose.model("studentSchema", studentSchema);