import React, { Component } from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import {Routes,Route} from 'react-router-dom'
import NotFound from './Components/NotFound'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* <Routes>
       <Route path='page-top'element={<Header/>}></Route>
       <Route path='portfolio'element={<Portfolio/>}></Route>
       <Route path='about'element={<About/>}></Route>
       <Route path='contact'element={<Contact/>}></Route>
       <Route path='*'element={<NotFound/>}></Route>
        </Routes> */}
        <Header/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}
