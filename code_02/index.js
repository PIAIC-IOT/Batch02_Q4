const mongoose = require('mongoose');
const Student = require('./model');
// mongoose.connect('mongodb+srv://testuser:54321@cluster0.453kw.mongodb.net/testclasses?retryWrites=true&w=majority',
mongoose.connect('mongodb://localhost/DemoTest02',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
const express = require('express')
const app = express()
app.use(express.json());

app.get('/students', async (req, res) => {
    const std = await Student.find({})
    res.send(std)
})

app.post('/student', (req, res) => {
    const stdname = new Student(req.body);
    stdname.save()
        .then(() => {
            res.send("User saved")
        })
        .catch((err) => { console.log("Errrrr=====>", err) })
})

app.put('/student/:id', (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        res.send("Record Updated");
    })
})
app.delete('/student/:id', (req, res) => {
    Student.findByIdAndDelete(req.params.id).then((user) => {
        res.send("Data Deleted");
    })
})

app.listen(8080, () => {
    console.log("Server")
})
