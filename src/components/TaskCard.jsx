import React, { useContext , useState} from "react";
import { TaskContext } from "../context/TaskContext"; 
import { BiTrash } from "react-icons/bi";

function TaskCard({ task, deleteTask }) {
  const valor = useContext(TaskContext);


  return (
    <div className="flex bg-gray-800 text-white rounded-md justify-between">
      <h1 className="text-xl font-bold capitalize p-4">{task.title}</h1>
      <button
        className="bg-red-500 px-4 py-1 rounded-md hover:bg-red-900" 
        onClick={() => deleteTask(task.id)}>
        <BiTrash/>
      </button>
    </div>
  );
}

export default TaskCard;
