import React, { useState } from "react";
import { Plus } from "lucide-react";

const TodoComponent = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="w-full p-6 flex flex-col gap-6 bg-black text-white min-h-screen">
      <div>
        <h1 className="text-4xl font-bold mb-1">Good Afternoon.</h1>
        <p className="text-gray-400 text-xl">What's your plan for today?</p>
      </div>

      {/* Input section */}
      <div className="bg-gray-900 p-4 rounded-xl flex gap-2 items-center">
        <input
          type="text"
          placeholder="Add Todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
        />
        <button onClick={addTask} className="bg-gray-700 hover:bg-gray-600 p-2 rounded-xl">
          <Plus />
        </button>
      </div>

      {/* Todo List */}
      <div className="space-y-4">
        {todos.map((todo, i) => (
          <div
            key={i}
            className="bg-gray-900 p-4 rounded-xl text-lg flex items-center gap-3"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(i)}
              className="accent-gray-500 w-5 h-5"
            />
            <span
              className={`text-white ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoComponent;
