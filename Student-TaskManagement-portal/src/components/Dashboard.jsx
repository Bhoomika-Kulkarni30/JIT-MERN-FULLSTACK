import Statcard from "./Statcard";
import Taskcard from "./Tasklcard";
import AddTask from "./AddTask";
import { useState } from "react";

function Dashboard(){
    const [tasks,setTasks]=useState([
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
    ]);

    function toggletask(id){
     setTasks(
        tasks.map((task) => {
            if(task.id === id){
                return {...task,
                    status: task.status === "status:completed" ? "status:pending" : "status:completed"
                };
                
            }
            return task;
        }
    ));
    }

    function addTask(newTask){
     setTasks([...tasks,newTask]);
    }
    return(
    <main>
        <div className="stat-container">
         <Statcard title="Total tasks" value="10"/>
         <Statcard title="Completed"value="6"/>
         <Statcard title="Pending" value="4"/>
        
        </div>

        <AddTask onAddtask={addTask}/>

        <h2 className="tasks-container">Recent Tasks</h2>
        <div className="tasks-container">
            {tasks.map((task) =>(
                <Taskcard key={task.id} title={task.title} description={task.description} status={task.status} 
                onToggle={() => toggletask(task.id)}/>
            ))}; 
        </div>
    </main>     
    );
}
export default Dashboard;