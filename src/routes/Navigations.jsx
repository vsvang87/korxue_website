import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Music from '../components/Music'
import Contact from '../components/Contact'
import Performance from '../components/Performance';

const Navigations = ({videos}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/performance' element={<Performance/>}/>
            <Route path='/music' element={<Music/>} videos={videos}/>
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default Navigations