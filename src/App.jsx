import { useState } from 'react'
import banner from "./images/banner.jpg";
import Header from './components/Header';
import Hero from './components/Hero';
import Music from './components/Music'
import Contact from './components/Contact'
import "./sass/style.scss";
import VIDEOS from './components/musicData.js';
import Banner from './components/Banner.jsx';



function App() {

  return (
    <div>
     <Header/>
     <Hero/>
     <Banner/>
     <Music videos={VIDEOS}/>
     <Contact/>
    </div>
  )
}

export default App
