import { useParams } from "react-router-dom";

function Taskdetails(props){
        const {id} = useParams();
        const task = props.tasks.find((tasks)=> tasks.id === Number (id));
        if(!task){
            return <h2> Task Not Found ! </h2>
        }
        return (
        <div className="task-details">
    <h1>Task details :</h1> <div>
    <h2>{task.title}</h2><br></br>
    <p>{task.description}</p><br/>
    <p> Status: {task.status}</p> </div>
</div>
);
}
export default Taskdetails;