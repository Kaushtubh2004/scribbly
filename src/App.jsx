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
import Faq from './components/Faq'
import Todo from './components/Todo'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Landing /><ScribblyGuide/><Faq/><Footer/></>
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
      element: <><Todo/></>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}


export default App