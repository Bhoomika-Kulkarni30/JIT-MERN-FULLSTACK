require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const Task = require("./models/Task")
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(()=>{
console.log("MongoDB Connected succesfully");
}).catch((error)=>{
    console.log("MongoDB Connection Failed",error.message);
})


    app.get("/api/tasks",async (req,res) =>{
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(error){
        res.status(500).json({message:"Failed to fetch Task"});
    }
    });



    app.get("/api/tasks/:id",async (req, res)=>{
 try{
       const task = await Task.findById(req.params.id);
      if(!task){
    return res.status(404).json({message:"Task not Found"})
   }
   res.json(task);
 }catch(error){
    res.status(404).json({message:"Failed to fetch ID"})
 }
    });
     



    app.put("/api/tasks/:id", async (req,res)=>{
        try{
            const task = await Task.findByIdAndUpdate(
                req.params.id,
                {status: req.body.status},
                { returnDocument: "after"} // changed from {new:true} [reason : deprecated error occurs for the version we use i.e. cmptly persol]
            );
            if(!task){
                return res.status(404).json({message:"Task not Found"})
            }
            res.json(task);
        }catch(error){
    res.status(500).json({message:"Failed to fetch ID"})
 }
    })


    app.delete("/api/tasks/:id", async (req,res)=>{
       try{
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if(!deletedTask){
            return res.status(404).json({message:"Task not found"})
        }
        res.json(deletedTask);
       }catch(error){
    res.status(500).json({message:"Failed to fetch ID"})
 }
    })


    app.post("/api/tasks",async (req,res)=>{
        try{
            const newTask = await Task.create(req.body);
            res.status(201).json(newTask);
        }catch(error){
    res.status(500).json({message:"Failed to fetch ID"})
 }
    })


app.get("/",(req,res) =>{

    res.send("Backend is Working !!")

});

app.listen(5000,() =>{
    console.log("Server is running on port 5000")
}); 
