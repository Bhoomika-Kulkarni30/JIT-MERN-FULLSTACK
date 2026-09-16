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
          status:"pending"
        },
          {
            id:2,
             title:"HTML & CSS",
         description:"building Responsive Webpage", 
         status:"completed"
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
    if(!task){
        return res.status(404).json({message:"Task Not Found!"})
    }
    res.json(task);
    })
     
    app.put("/api/tasks/:id",(req,res)=>{
        const id = Number(req.params.id);
        const task = tasks.find((task) => task.id === id);
    
      if(!task){
        return res.status(404).json({message:"Task not found"})
      }   
       task.status = req.body.status;
       res.json(task);
    })

    app.delete("/api/tasks/:id", (req,res)=>{
        const id = Number(req.params.id);
        const taskIndex = tasks.findIndex((task)=>task.id === id);
        if(taskIndex === -1){
            return res.status(404).json({message:"Task not found"})
        }
        const deletedTask = tasks.splice(taskIndex, 1);
        res.json(deletedTask[0]);
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
