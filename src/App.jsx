import { useState } from 'react'
import banner from "./images/banner.jpg";
import Header from './components/Header';
import Hero from './components/Hero';
import Music from './components/Music'
import Contact from './components/Contact'
import "./sass/style.scss";
// import VIDEOS from './components/musicData.js';



function App() {

  return (
    <div>
     <Header/>
     <Hero/>
     <Music/>
     <Contact/>
    </div>
  )
}

export default App
