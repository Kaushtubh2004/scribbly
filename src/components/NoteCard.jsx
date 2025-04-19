import React from "react";

const NoteCard = ({ title, content }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4 w-full aspect-square hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 cursor-pointer overflow-hidden">
      <h3 className="text-white text-xl font-semibold mb-2 truncate">{title}</h3>
      <p className="text-gray-300 text-sm line-clamp-4 overflow-hidden">{content}</p>
    </div>
  );
};

export default NoteCard;