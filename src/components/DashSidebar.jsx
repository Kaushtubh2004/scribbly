import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaSignOutAlt, FaUserTie } from "react-icons/fa";
import { LuNotebook } from "react-icons/lu";

const DashSidebar = () => {
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
              <FaUserTie className="text-xl" />
            </div>
            {isExpanded && <span className="text-lg">User Profile</span>}
          </div>

          <div className="flex items-center space-x-4 hover:text-gray-400 cursor-pointer">
            <div className=" text-white p-2 rounded">
              <FaSignOutAlt className="text-xl" />
            </div>
            {isExpanded && <span className="text-lg">Logout</span>}
          </div>
        </div>
      </div>

    </>

  );
};

export default DashSidebar;
