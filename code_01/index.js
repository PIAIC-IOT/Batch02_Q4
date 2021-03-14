const express = require("express"); // Module add
const app = express(); //Object create for Express\

app.use(express.json());

var students = [
    {id: 1, name: "Faheem"},
    {id: 2, name: "Waleed"},
    {id: 3, name: "Ibad"}
];

// GET is used for fetching the data.
app.get("/home",function(req,res){ // ES5
    console.log("The Basic Request is call")
    res.send("Hello From the Basic Function")
});

app.get("/arrow",(req,res)=>{  // ES6
    res.send("Hello From the Basic => Function")
});

app.get("/",(req,res)=>{  // ES6
    console.log("Students List Fetch")
    res.send("The students are in BATCH 01"+ JSON.stringify(students))
});

app.post("/student",(req,res)=>{
    var student = {
        id : students.length + 1,
        name : req.body.name
    }
    students.push(student)
    // console.log("The Current Students are "+students.length)
    console.log(`The Current Students are ${students.length}`)
    res.send("The student is Added");
})

// Update
app.put("/student/:id",(req,res)=>{
    var student = students.find(s => s.id === parseInt(req.params.id))
    student.name = req.body.name
    res.send("Record is Updated.")
    // console.log(req.params.id);
    // res.send("Okay ID Is revices")
})

app.delete("/student/:id",(req,res)=>{
    var student = students.find(s => s.id === parseInt(req.params.id))
    var index = students.indexOf(student);
    students.splice(index,1)
    res.send("Records is Deleted")
    
})

app.listen(8080,function(){
    console.log("The Server is Up on Port 8080")
})





