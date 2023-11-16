const express = require("express");
const studentRoute = express.Router();
const studentSchema = require("../model/schema");
const mongoose = require("mongoose");

/*
In .post(), Client enters data as:
Name = Raj
Email = raj@gmail.com
RollNo = 1
Since client is requesting, so the details of the client data will be stored in req.body(which is an object)
*/
/*
On client side, we use Axios to get data from the client and use express to update the data on server ->
A button needs to be created to post data (in react file)
const handleClick = ()=>{
    Axios.post("http://localhost:4001/create-student")
}
*/
studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,(err, data)=>{
        if(err)
            return err;
        else
            res.json(data); //whatever has been posted by client will be shown n page
    })
});

studentRoute.get("/", (req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

/*
We used the below code instead of writing studentRoute.get(); studentRoute.put(); to adjust this in one line
Now studentRoute.route("/update-student").get().put(); will execute get if it is a 'get' request at "/update-student" url else execute 'put' request
Now we are using a unique id as our url to fetch a particular record
Eg: _id->652cc51147db65323 -> ObjectID of raj
mongoose.Types.ObjectId(req.param.id) -> We are getting id that is available in the url through req.params.id and coverting into Object ID to search the record in DB.
Now we use url http://localhost:4001/studentRoute/update-student/mongoose.Types.ObjectId(req.params.id)
*/
studentRoute.route("/get-student/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else 
            res.json(data);
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

/*To delete a particular record we will use Axios from client-side to reach this url through http request with a specific id of a record 
    because that url will execute this delete request in Express(server-side)*/
studentRoute.delete("/delete-student/:id", (req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

//Note - For delete, post, put we use Axios in forntend part to update the records on server side as Express and Node can only fetch data from server and not update it.
// To update the records we can only use Axios.
module.exports = studentRoute;