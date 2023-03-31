import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">Aun no tienes tareas</h1>;
  }

  return (
    <div className="flex m-auto gap-2 flex-col max-w-xs">
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
