import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer';
import ItineraryDisplay from '../components/ItineraryDisplay/ItineraryDisplay';
function Itinerary() {
  return (
    <>
        <Navigation/>
        <ItineraryDisplay/>
        <Footer/>
    </>
  )
}

export default Itinerary