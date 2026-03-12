import React, { useState } from "react";
import "./TaskList.css";

function TaskList() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if(input.trim() !== ""){
      setTasks([...tasks, {text: input, completed:false}]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task,i)=>i!==index));
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="app">

      <h1>Task Manager</h1>

      <div className="inputSection">
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="stats">
        Total Tasks: {tasks.length} | Completed: {completedCount}
      </div>

      <ul>

        {tasks.map((task,index)=>(
          <li key={index} className={task.completed ? "done" : ""}>

            <input
              type="checkbox"
              checked={task.completed}
              onChange={()=>toggleTask(index)}
            />

            {task.text}

            <button className="delete" onClick={()=>deleteTask(index)}>
              Delete
            </button>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default TaskList;
