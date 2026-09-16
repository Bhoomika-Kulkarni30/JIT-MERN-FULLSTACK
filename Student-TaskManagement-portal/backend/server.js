const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

 const tasks=[
        { 
            id:1,
            title:"Learn React",
          description:"Understanding components",
          status:" in progress"
        },
          {
            id:2,
             title:"HTMLCSS",
         description:"building Responsive Webpage", 
         status:" completed"
        },
        {
            id:5,
             title:"Node & Express", 
         description:"Building REST API's",
         status:"pending"
        }
    ];


    app.get("/api/tasks",(req,res) =>{
        res.json(tasks);
    });

    app.get("/api/tasks/:id",(req, res)=>{
        const id =Number(req.params.id);
        const task = tasks.find((task)=> task.id === id);
        res.json(task);
    if(!task){
        return res.status(404).json({message:"Task Not Found!"})
    }
    res.json(task);
    })

    app.post("/api/tasks",(req,res)=>{
        const newTask = req.body;
        tasks.push(newTask);
        res.status(201).json(newTask);
    })

app.get("/",(req,res) =>{

    res.send("Backend is Working !!")

});

app.listen(5000,() =>{
    console.log("Server is running on port 5000")
});
