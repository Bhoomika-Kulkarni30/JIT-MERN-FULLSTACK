const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());

 const tasks=[
        { 
            id:1,
            title:"Learn React",
          description:"Understanding components",
          status:"Status: in progress"
        },
          {
            id:2,
             title:"HTMLCSS",
         description:"building Responsive Webpage", 
         status:"Status: completed"
        },
        {
            id:3,
             title:"Node & Express", 
         description:"Building REST API's",
         status:"Status: pending"
        }
    ];

    app.get("/api/tasks",(req,res) =>{
        res.json(tasks);
    });

app.get("/",(req,res) =>{

    res.send("Backend is Working !!")

});

app.listen(5000,() =>{
    console.log("Server is running on port 5000")
});
