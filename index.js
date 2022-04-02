// Connect Nodejs to MongoDb 

//mongoose is an object data modeling(ODM) library for mongoDB And Node Js

// install :   npm i mongoose
//             npm i nodemon
//             npm i express

const mongoose = require("mongoose");
const nodemon = require("nodemon");
const express = require('express')

const app = express();
app.listen(5000, () => { console.log("port on 5000") })

//Schema : a mongooes schema define structure of documentaion 

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    RN: Number,
    branch: {
        type: String,
        required: true
    }
})

//connection 

mongoose.connect("mongodb://localhost:27017/NodeData").then(
    () => console.log("connected")).catch((err) => console.log(err));

//create colllection 

const list = new mongoose.model("list", listSchema);

//create document or insert

const createDoc = async () => {
    try {
        const datalist = new list({
            name: "sahil",
            RN: 26,
            branch: "CV"
        })
        const datalist_1 = new list({
            name: "smit",
            RN: 25,
            branch: "CE"
        })
        const datalist_2 = new list({
            name: "sumit",
            RN: 24,
            branch: "ME"
        })
        const datalist_3 = new list({
            name: "sagar",
            RN: 23,
            branch: "CE"
        })
        const datalist_4 = new list({
            name: "sanjay",
            RN: 22,
            branch: "CV"
        })
        const datalist_5 = new list({
            name: "snehal",
            RN: 21,
            branch: "IT"
        })
        const datalist_6 = new list({
            name: "sahil",
            RN: 20,
            branch: "IT"
        })
        const datalist_7 = new list({
            name: "Rahul",
            RN: 1,
            branch: "IT"
        })
        const datalist_8 = new list({
            name: "Dhruv",
            RN: 2,
            branch: "CE"
        })
        const datalist_9 = new list({
            name: "Nirmal",
            RN: 3,
            branch: "ME"
        })
        const datalist_10 = new list({
            name: "Mihir",
            RN: 4,
            branch: "CV"
        })
        const datalist_11 = new list({
            name: "Yash",
            RN: 5,
            branch: "CE"
        })
        const datalist_12 = new list({
            name: "Kaushal",
            RN: 6,
            branch: "IT"
        })
        const datalist_13 = new list({
            name: "Siddharth",
            RN: 7,
            branch: "AG"
        })
        const datalist_14 = new list({
            name: "Jay",
            RN: 8,
            branch: "AG"
        })
        const datalist_15 = new list({
            name: "Raj",
            RN: 9,
            branch: "Cv"
        })
        const result = await list.insertMany([datalist, datalist_1, datalist_2, datalist_3, datalist_4, datalist_5, datalist_6, datalist_7, datalist_8, datalist_9, datalist_10, datalist_11, datalist_12, datalist_13, datalist_14])
    } catch (err) {
        console.log(err);
    }

}
// datalist.save(); // for only one data
// createDoc(); //function call

// read document

const getDoc = async () => { 
   const res = await list.find({branch:"IT"}).select({RN:1,_id:0});
   console.log(res);
}
getDoc();