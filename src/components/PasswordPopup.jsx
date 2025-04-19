import React, { useState } from "react";

const PasswordPopup = ({ onClose, onChangePassword }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChange = () => {
    if (!currentPassword || !newPassword) return;
    onChangePassword({ currentPassword, newPassword });
    setCurrentPassword("");
    setNewPassword("");
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#000000ab] bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 text-white rounded-xl p-6 w-[90%] max-w-sm shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Change Password</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-300">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
              placeholder="Enter current password"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
              placeholder="Enter new password"
            />
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
            onClick={handleChange}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordPopup;
