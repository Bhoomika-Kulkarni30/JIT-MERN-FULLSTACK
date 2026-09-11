import { useParams } from "react-router-dom";

function Taskdetails(){
        const {id} = useParams();
        return (
        <div>
    <h1>Task details</h1>
    <p>Task ID: {id}</p>
</div>
);
}
export default Taskdetails;