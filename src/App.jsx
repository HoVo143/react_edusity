
import './App.css'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/Navbar/Navbar'
import Programs from './Component/Programs/Programs'
import Testimonials from './Component/Testimonials/Testimonials'
import Title from './Component/Title/Title'
import VideoPlayer from './Component/VideoPlayer/VideoPlayer'
import { useState } from 'react'

function App() {

  const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle ="OUR PROGRAM" title ="What We Offer" />
        <Programs/>
        <About setPlayState={setPlayState} />
        <Title subTitle ="GALLERY" title ="Campus Photos" />
        <Campus/>
        <Title subTitle ="TESTIMONIALS" title ="What Student Says" />
        <Testimonials/>
        <Title subTitle ="CONTACT US" title ="Get in Touch" />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
