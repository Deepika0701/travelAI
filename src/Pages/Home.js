import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import Hero from '../components/HeroSection/Hero'
import Service from '../components/ServiceSection/Service';
import About from '../components/AboutUs/About';
import Footer from '../components/Footer/Footer';
function Home() {
  return (
    <div>
    <Navigation/>
    <Hero/>
    <Service/>
    <About/>
    <Footer/>
    </div>
  )
}

export default Home