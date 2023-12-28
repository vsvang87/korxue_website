import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navigations from './routes/Navigations.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import "./sass/style.scss";



function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Navigations/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
