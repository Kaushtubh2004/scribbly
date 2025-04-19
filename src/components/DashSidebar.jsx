import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaSignOutAlt, FaUserTie } from "react-icons/fa";
import { LuNotebook } from "react-icons/lu";
import { MdOutlinePassword } from "react-icons/md";
import ProfilePopup from "./ProfilePopup";
import PasswordPopup from "./PasswordPopup";

const DashSidebar = () => {

  const [showPasswordPopup, setShowPasswordPopup] = useState(false);

  const handlePasswordChange = ({ currentPassword, newPassword }) => {
    console.log("Change request:", currentPassword, newPassword);
    // Call your backend API here
  };

  const [showPopup, setShowPopup] = useState(false);

  const user = {
    name: "Kaushtubh Singh",
    email: "kausthubh@example.com",
    image: "https://i.pravatar.cc/150?img=3", // Sample profile picture
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (

    <>
      <div className={`bg-gray-900 text-white transition-all duration-300 ${isExpanded ? "w-64" : "w-20"} py-6 px-4 flex flex-col items-center md:items-start`}>
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl mb-6 self-center md:self-start p-2"
        >
          <FiMenu />
        </button>

        <div className="flex flex-col space-y-8 w-full">
          <div className="flex items-center space-x-4 hover:text-gray-400 cursor-pointer">
            <div className="bg-[#45454578] text-white p-2 rounded">
              <LuNotebook className="text-xl" />
            </div>
            {isExpanded && <span className="text-lg">All Notes</span>}
          </div>

          <div className="flex items-center space-x-4 hover:text-gray-400 cursor-pointer">
            <div className=" text-white p-2 rounded">
              <FaUserTie  onClick={() => setShowPopup(true)} className="text-xl" />
            </div>
            {isExpanded && <span className="text-lg">User Profile</span>}
          </div>

          <div className="flex items-center space-x-4 hover:text-gray-400 cursor-pointer">
            <div className=" text-white p-2 rounded">
            <MdOutlinePassword onClick={() => setShowPasswordPopup(true)} className="text-xl" />
            </div>
            {isExpanded && <span className="text-lg">Change Password</span>}
          </div>
          <div className="flex items-center space-x-4 hover:text-gray-400 cursor-pointer">
            <div className=" text-white p-2 rounded">
              <FaSignOutAlt className="text-xl" />
            </div>
            {isExpanded && <span className="text-lg">Logout</span>}
          </div>
        </div>
      </div>
      {showPopup && (
        <ProfilePopup user={user} onClose={() => setShowPopup(false)} />
      )}
      {showPasswordPopup && (
        <PasswordPopup
          onClose={() => setShowPasswordPopup(false)}
          onChangePassword={handlePasswordChange}
        />
      )}
    </>

  );
};

export default DashSidebar;
