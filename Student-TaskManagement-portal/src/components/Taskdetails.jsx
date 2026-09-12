import { useParams } from "react-router-dom";

function Taskdetails(props){
        const {id} = useParams();
        const task = props.tasks.find((tasks)=> tasks.id === Number (id));
        if(!task){
            return <h2> Task Not Found ! </h2>
        }
        return (
        <div>
    <h1>Task details</h1>
    <h2>{task.title}</h2>
    <p>{task.description}</p>
    <p>{task.status}</p>
</div>
);
}
export default Taskdetails;