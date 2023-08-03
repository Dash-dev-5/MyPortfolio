import './App.scss'
import Home from './pages/Home/Home'
import Navbar from './bloc/Navbar/Navbar'
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
      </Router>
    </>
  )
}

export default App
