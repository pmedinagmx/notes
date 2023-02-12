import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-1xl md:text-2xl lg:text-2xl font-bold mb-5">{task.title}</h1>
      <p className="text-gray-300 text-sm md:text-lg lg:text-lg mb-5 overflow-auto">
        {task.description}
      </p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400 text-sm md:text-md lg:text-md"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
