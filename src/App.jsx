import './App.scss'
import Home from './pages/Home/Home'
import Navbar from './bloc/Navbar/Navbar'
import Footer from './bloc/Footer/Footer'
import React from 'react'
import Pricing from './pages/Pricing/Pricing'
import Portfolio from './pages/PortFolio/Portfolio'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/Portfolio' Component={Portfolio}/>
        </Routes>
        <Pricing/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
