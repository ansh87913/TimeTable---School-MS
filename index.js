const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/router");
const bodyParser = require("body-parser");
const cors = require("cors");


mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://test:12345@cluster0.oixkq7r.mongodb.net/");
var db = mongoose.connection;
db.on("open", ()=>console.log("Connected to database"));
db.on("error", ()=>console.log("Error occured while connecting with db"));

const app = express(); //connecting to app module

//We are using bodyParser that is a middleware and is used to collect data from a form(client-side) that is stored in 'req.body' to post it on server-side DB. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/students", studentRoute);

app.listen(4000,()=>{
    console.log("Server started at 4000");
});