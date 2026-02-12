import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const [isLogIn, setisLogIn] = useState(false)
  const loginchange = ()=>{
    isLogIn?setisLogIn(false):setisLogIn(true);
  }

  return (
    <>
    <Header isLoggedIn={isLogIn} loginchange={loginchange} />
    <h1>{isLogIn?"dev":"Patel"}</h1>
    <Footer/>
    </>
  )
}

export default App
