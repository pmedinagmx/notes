import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 mb-10 rounded-md"
      >
        <h1 className="text-1xl md:text-2xl lg:text-2xl font-bold text-white mb-6">Add a note</h1>
        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 text-sm md:text-lg lg:text-lg p-3 w-full mb-2 rounded-md placeholder-gray-500"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 text-sm md:text-md lg:text-md p-3 w-full mb-6 rounded-md placeholder-gray-500"
          value={description}
          required
          autoFocus
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white text-sm md:text-md lg:text-md rounded-md hover:bg-indigo-400">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
