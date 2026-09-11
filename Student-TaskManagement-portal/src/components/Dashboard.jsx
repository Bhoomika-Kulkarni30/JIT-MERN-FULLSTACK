import Statcard from "./Statcard";
import Taskcard from "./Tasklcard";
import AddTask from "./AddTask";
import { useState } from "react";

function Dashboard(props){
   

    function toggletask(id){
     props.setTasks(
    props.tasks.map((task) => {
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
     props.setTasks([...tasks,newTask]);
    }

 function deleteTask(id) {
    props.setTasks(
        tasks.filter((task) => {return task.id !==id})
    );
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
            {props.tasks.map((task) =>(
                <Taskcard key={task.id} 
                id={task.id}
                title={task.title} 
                description={task.description} 
                status={task.status} 
                onToggle={() => toggletask(task.id)}
                onDelete={() => deleteTask(task.id)}
                />
            ))}; 
        </div>
    </main>     
    );
}
export default Dashboard;