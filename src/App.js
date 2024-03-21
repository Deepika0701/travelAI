import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Plantrip from "./Pages/Plantrip";
import Itinerary from "./Pages/Itinerary";
import ItineraryCard from "./components/ItineraryCard/ItineraryCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Plan" element={<Plantrip />} />
          <Route path="/Itinerary" element={<Itinerary />} />
          <Route path="/ItineraryCard" element={<ItineraryCard />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
