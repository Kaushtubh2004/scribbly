import React from 'react'
import DashSidebar from './DashSidebar'
import TodoComponent from './TodoComponent'
import Calendar from './Calendar'

const Todo = () => {
  return (
    <>
    <div className="flex">
    <DashSidebar/><TodoComponent/><Calendar/>
    </div>
    </>
  )
}

export default Todo