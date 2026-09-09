import Statcard from "./Statcard";
import Taskcard from "./Tasklcard";

function Dashboard(){
    const tasks=[
        { title:"Learn React",
          description:"Understanding components",
          status:"Status: in progress"
        },
          {
             title:"HTMLCSS",
         description:"building Responsive Webpage", 
         status:"Status: completed"
        },
        {
             title:"Node & Express", 
         description:"Building REST API's",
         status:"Status: pending"
        },{},{},{},{}
    ];
    return(
    <main>
        <div className="stat-container">
         <Statcard title="Total tasks" value="10"/>
         <Statcard title="Completed"value="6"/>
         <Statcard title="Pending" value="4"/>
        
        </div>
        <h2 className="tasks-container">Recent Tasks</h2>
        <div className="tasks-container">
            {tasks.map((task) =>(
                <Taskcard key={task.id} title={task.title} description={task.description} status={task.status}/>
            ))}; 
        </div>
    </main>     
    );
}
export default Dashboard;