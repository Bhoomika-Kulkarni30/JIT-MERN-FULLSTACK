import Statcard from "./Statcard";
import Taskcard from "./Tasklcard";
import AddTask from "./AddTask";

function Dashboard(props){
 
    
    function toggletask(id){
     props.setTasks(
    props.tasks.map((task) => {
            if(task.id === id){
                return {...task,
                    status: task.status === "Completed" ? "Pending" : "Completed"
                };
                
            }
            return task;
        }
    ));
    }

    function addTask(newTask){
     props.setTasks([...props.tasks,newTask]);
    }

 function deleteTask(id) {
        props.setTasks(
            props.tasks.filter((task)=>task.id !==id)
        );
    }


    return (
    <main>
        <div className="stat-container">
         <Statcard title="Total tasks" value="10"/>
         <Statcard title="Completed"value="6"/>
         <Statcard title="Pending" value="4"/>
        
        </div>

        <AddTask onAddtask={addTask}/>

        <h2 className="tasks-container">Recent Tasks</h2>
        <div className="tasks-container">
            {props.tasks.map((task)=>(
     
                <Taskcard 
                key={task.id} 
                id={task.id}
                title={task.title} 
                description={task.description} 
                status={task.status} 
                onToggle={() => toggletask(task.id)}
                onDelete={() => deleteTask(task.id)}
                />
            ))}
        </div>
    </main>     
    );
}
export default Dashboard;