function Tasks(props){
return (
    <div>
        <h1>Tasks Page</h1>
        
        {
            props.tasks.map((task) =>(
                <div key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <p> Status: {task.status}</p>
                    </div>
            ))

        }
    </div>
);
}
export default Tasks;