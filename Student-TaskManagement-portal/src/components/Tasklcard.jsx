function Taskcard(props){
    return (
    <div className="task-card">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p><i>{props.status}</i></p>
    </div>
    );
}
export default Taskcard;