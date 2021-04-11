const Users = require("../models/user-model");
const bcr = require("bcryptjs")

exports.createRec = (req, res) => {

    // if (!req.body.email || !req.body.password || !req.body.name) {
    //     return res.send("Please Provide the details")
    // }


    if (!req.body.email) {
        return res.send("Please Provide the Email")
    }
    else if (!req.body.password) {
        return res.send("Please Provide the password")
    }
    else if (!req.body.name) {
        return res.send("Please Provide the name")
    }
    else {
        const user = new Users(
            {
                email: req.body.email,
                password: bcr.hashSync(req.body.password, 10),
                name: req.body.name,
                age: req.body.age,
                gender: req.body.gender,
                isActive: req.body.isActive,
                userType: req.body.userType,
            }
        );
        user
            .save()
            .then((data) => {
                res.send("Record Added" + data)
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

exports.findAllRec = (req, res) => {
    Users.find()
        .then((users) => {
            res.send(users);
        })
        .catch((e) => {
            console.log(e);
        })
}

exports.findOne = (req, res) => {
    Users.findById(req.params.id)
        .then((user) => {
            res.send(user);
        })
        .catch((e) => {
            return res.send("Error While Finding the Record");
        })
}

exports.deleteRec = (req, res) => {
    Users.findByIdAndRemove(req.params.id)
        .then((user) => {
            res.send("Records Deleted");
        })
        .catch((e) => {
            return res.send("Error While Finding the Record");
        })
}

exports.updateRec = (req, res) => {
    if (!req.body.email) {
        return res.send("Please Provide the Email")
    }
    else if (!req.body.password) {
        return res.send("Please Provide the password")
    }
    else if (!req.body.name) {
        return res.send("Please Provide the name")
    }
    else{
    Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((user) => {
            res.send("Updated User: " + user);
        })
        .catch((e) => {
            return res.send("Error While Finding the Record");
        })
    }
}


// == Request === 
// {
//     "email" : "faheem@yahoo.com",
//     "password" : "pass1234",
//     "name":"Faheem",
//     "age" : "34",
//     "gender" : "Male",
//     "isActive" : true ,
//     "userType" : "admin" 
// }