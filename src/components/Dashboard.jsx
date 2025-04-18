import React from 'react'
import DashSidebar from './DashSidebar'
import { FaPencilAlt } from "react-icons/fa";
const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen bg-black">
        <DashSidebar />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-white">Add notes</h1>
        </div>
        <div className="h-screen flex flex-col justify-end p-6">
          <div className="text-white rounded-full bg-gray-800 p-6 hover:bg-[#45454578] hover:text-red-600 cursor-pointer">
            <FaPencilAlt />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard