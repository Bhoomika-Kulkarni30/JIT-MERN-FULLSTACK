import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { Routes,Route } from "react-router-dom";
import Tasks from './components/Tasks';
import Taskdetails from './components/Taskdetails';


import './App.css'


function App(){
     
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
    
  return(
    <div>
    <Navbar />
  <Routes>
      <Route path="/" element={<Dashboard tasks={tasks} />}/>
      <Route path="/tasks" element={<Tasks />}/>
      <Route path="/task/:id" element={<Taskdetails />}/>
  </Routes>
    </div>
  );
}
export default App;