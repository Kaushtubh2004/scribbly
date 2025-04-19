import React, { useState } from "react";

const PopupForm = ({ onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    if (!title.trim()) return;
    onCreate({ title, description });
    setTitle("");
    setDescription("");
    onClose(); // close the modal
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#000000ab] bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 text-white rounded-lg p-6 w-[90%] max-w-md shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">New Task</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-300">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Description</label>
            <textarea
              className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            ></textarea>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
