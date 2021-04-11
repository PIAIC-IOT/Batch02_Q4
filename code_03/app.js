const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/",require("./user_routes"));

app.listen(4000,()=>{console.log("Server is Up on 4000")})


















// app.get("/:user_id/:user_name",(req,res)=>{
//     console.log("userId: "+req.params.user_id);
//     console.log("userName: "+req.params.user_name);
//     res.send("Values Accepted")
// })



// app.get('/',(req,res)=>{
//     res.send("Home Page");
// })