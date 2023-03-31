import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext"; 

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");

  useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();
    createTask({
      title,
    });
    setTitle(""); 

  } 


  return (
    <div className="max-w-md mx-auto"> 
    <h1 className="text-4xl mb-2 font-bold text-white">Crea tu tarea</h1>
      <form onSubmit={handleSubmit} className="p-1 mb-4 md:flex"> 
      <input
        placeholder="Escribe tu tarea"
        onChange={function (e) {
          setTitle(e.target.value); 
        }}
        value={title}
        autoFocus 
        className="bg-slate-300 p-3 w-full rounded-l max-md:rounded-none outline-none" 
      />
      <button className="bg-red-500 px-1 text-white rounded-r-lg max-md:rounded-none max-md:w-full py-1 max-md:mt-2 ">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
