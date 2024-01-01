import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from '../components/Header';
import Music from '../components/Music'
import Contact from '../components/Contact'
import Photos from '../components/Photos';


const Navigations = () => {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/photo' element={<Photos/>} />
            <Route path='/music' element={<Music/>}/>
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default Navigations