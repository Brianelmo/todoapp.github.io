import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./task";

function App() {
  const [tasks, setTasks] = useState([]); 


  useEffect(() => {
    let datos =  localStorage.getItem('task') 
    if(datos) {
      setTasks(JSON.parse(datos));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("task" , JSON.stringify(tasks))
  }, [tasks]); 

  

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title:task.title,
        id: tasks.length,
      },
    ]);
  };

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm createTask={createTask} />
        <div className="flex justify-center flex-col">
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </main>
  );
}

export default App;
