import { useState } from "react";

export default function AddTask(props){
    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");
    function handleSubmit(e){
        e.preventDefault();
        const newTask={
            id:Date.now(),
            title: title,
            description: description,
            status:"Pending"
        };
      console.log("Object",newTask);
      props.onAddtask(newTask);
    }
    return(
        <div>
            <h2 className="AddTask">Add Task</h2>
            <form onSubmit={handleSubmit}>
            <label>Add Title</label>
            <input type="Text" value={title} onChange= {(e)=>setTitle(e.target.value)}/>
            <label>Add Description</label>
            <input type="Text" value={description} onChange= {(e)=>setDescription(e.target.value)}/>
            <button type="submit">Add Task</button>
            </form>
        </div>
    );

}