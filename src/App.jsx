import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import ForgotPassword from './components/ForgotPassword'
import Footer from './components/Footer'
import ScribblyGuide from './components/ScribblyGuide'
import Notepad from './components/Notepad'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Landing /><ScribblyGuide/><Footer/></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /><Footer/></>
    },
    {
      path: "/register",
      element: <><Navbar /><Register/><Footer/></>
    },
    {
      path: "/dashboard",
      element: <><Dashboard/></>
    },
    {
      path: "/forgotpassword",
      element: <><ForgotPassword/></>
    },
    
    {
      path: "/n",
      element: <><Notepad/></>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}


export default App