const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/CompExam', 
{ 
    useUnifiedTopology: true,
    newUrlParser: true,
    useNewUrlParser: true
},
(err)=>{
    if(!err)
    {
        console.log("Database Connected")
    }
    else{
        console.log("Database Not Connected")
    }
}
);
module.exports = mongoose;