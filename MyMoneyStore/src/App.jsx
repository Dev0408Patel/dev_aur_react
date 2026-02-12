import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'



function App() {
  const [isLogIn, setisLogIn] = useState(false)
  const loginchange = ()=>{
    isLogIn?setisLogIn(false):setisLogIn(true);
  }

  return (
    <>
    <Header isLoggedIn={isLogIn} loginchange={loginchange} />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
