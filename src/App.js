import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Plantrip from "./Pages/Plantrip";
import Itinerary from "./Pages/Itinerary";
import ItineraryCard from "./components/ItineraryCard/ItineraryCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Plan" element={<Plantrip />} />
          <Route path="/Itinerary" element={<Itinerary />} />
          <Route path="/ItineraryCard" element={<ItineraryCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
