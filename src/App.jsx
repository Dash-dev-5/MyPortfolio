import './App.scss'
import Home from './pages/Home/Home'
import Navbar from './bloc/Navbar/Navbar'
import Footer from './bloc/Footer/Footer'
import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='*' Component={Home}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
