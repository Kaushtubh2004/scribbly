import React,{useState} from 'react'
import DashSidebar from './DashSidebar'
import { FaPencilAlt } from "react-icons/fa";
import NoteCard from './NoteCard';
import { NavLink } from 'react-router-dom';
import PopupForm from "./PopupForm";

const dummyNotes = [
  {
    title: "Meeting Notes",
    content: "Discussed the roadmap for Scribbly. Added canvas-text merge feature and improved dark mode...",
  },
  {
    title: "UI Ideas",
    content: "Consider adding floating action buttons, smoother transitions, and more contrast...",
  }

];


const Dashboard = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleCreate = (data) => {
    console.log("Created Todo:", data);
    // Save it to your todos state
  };


  return (
    <>
      <div className="flex min-h-screen bg-black">
        <DashSidebar />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-white">Add notes</h1>
          <div className="p-6 w-full h-auto overflow-auto">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {dummyNotes.map((note, index) => (
                <NavLink to="/n"><NoteCard
                  key={index}
                  title={note.title}
                  content={note.content}
                /></NavLink>
              ))}
            </div>
          </div>
        </div>


        <button
          onClick={() => setShowPopup(true)}
          className="fixed bottom-6 right-6 z-50 bg-gray-800 hover:bg-gray-700 hover:text-red-600 text-white p-4 rounded-full shadow-xl transition duration-300"
        >
          <FaPencilAlt size={24} />
        </button>
        {showPopup && (
          <PopupForm
            onClose={() => setShowPopup(false)}
            onCreate={handleCreate}
          />
        )}
      </div>
    </>
  )
}

export default Dashboard