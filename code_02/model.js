const mongoose = require('mongoose');
const Stdschema = new mongoose.Schema({
    name:String
})
const Student = mongoose.model("tbl_student", Stdschema);
module.exports = Student;
