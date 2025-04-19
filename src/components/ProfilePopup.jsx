import React from "react";

const ProfilePopup = ({ onClose, user }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#000000ab] bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 text-white rounded-xl p-6 w-[90%] max-w-sm shadow-lg text-center">
        <img
          src={user?.image || "https://via.placeholder.com/100"}
          alt="User Avatar"
          className="mx-auto w-24 h-24 rounded-full mb-4 border-4 border-gray-700"
        />
        <h2 className="text-2xl font-bold">{user?.name || "John Doe"}</h2>
        <p className="text-gray-400">{user?.email || "john@example.com"}</p>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProfilePopup;
