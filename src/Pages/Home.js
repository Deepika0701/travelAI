import React from 'react'

import Hero from '../components/HeroSection/Hero'
import Service from '../components/ServiceSection/Service';
import About from '../components/AboutUs/About';

function Home() {
  return (
    <div>
    <Hero/>
    <Service/>
    <About/>
    </div>
  )
}

export default Home