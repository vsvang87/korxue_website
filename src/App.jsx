import { useState } from 'react'
import banner from "./images/banner.jpg";
import Header from './components/Header';
import Hero from './components/Hero';
import "./sass/style.scss";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Header/>
     <Hero/>
    </div>
  )
}

export default App
