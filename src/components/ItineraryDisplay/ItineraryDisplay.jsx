import React from "react";
import styles from "./Itinerary.module.css";
import ItineraryCard from "../ItineraryCard/ItineraryCard";
import { useLocation } from "react-router-dom";


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ItineraryDisplay(e) {
  // e.preventDefault();
  const location = useLocation();
  const itineraryData = location.state.data;
  const destination = capitalizeFirstLetter(location.state.destination);
  const result = JSON.parse(itineraryData);
  console.log(result.Itinerary);
  const iti = result.Itinerary;
  const days = result.Itinerary.length;

  console.log(iti);
  return (
    <>
      <div
        className={styles.itineraryHeader}

        
      >
        <div className={styles.numofdays}>
          <p>
            {days} Days in {destination}
          </p>
        </div>
        <div className={styles.your_itinerary}>
          <p className={styles.pad20}>Your itinerary</p>
        </div>
      </div>

      {iti.map((day, index) => (
        <div className={styles.flex_cards} key={index}>
          <div className={styles.days}>
            <p>Day {index + 1}</p>
          </div>

          <div className={styles.columnflex}>
          {day.Activities.map((activity, activityIndex) => (
       
        <div className={styles.card_margin} key={activityIndex}>
         
           
          <ItineraryCard
            daytime={activity.Daytime}
            time={activity.Time}
            placeName={activity["Place Name"]}
            address={activity.Address}
            ratings={activity.Ratings[0] || 0}
            description={activity["Short Description"]}
            food={Object.entries(activity.Nearby).map(([key, value]) => `${capitalizeFirstLetter(key)}: ${value}`)} 
          />
        </div>
      ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ItineraryDisplay;
