import React from "react";
import styles from "./Itinerary.module.css";
import ItineraryCard from "../ItineraryCard/ItineraryCard";
import { useLocation } from "react-router-dom";

function ItineraryDisplay() {
  const location = useLocation();
  const itineraryData = location.state.data;

  return (
    <>
      <div
        className={styles.itineraryHeader}

        
      >
        <div className={styles.numofdays}>
          <p>
            {itineraryData.length} days in {itineraryData[0].Destination}
          </p>
        </div>
        <div className={styles.your_itinerary}>
          <p className={styles.pad20}>Your itinerary</p>
        </div>
      </div>

      {itineraryData.map((day, index) => (
        <div className={styles.flex_cards} key={index}>
          <div className={styles.days}>
            <p>Day {index + 1}</p>
          </div>

          <div className={styles.columnflex}>
            {day[`Day${index + 1}`].map((activity, activityIndex) => (
              <div className={styles.card_margin} key={activityIndex}>
                <ItineraryCard
                  daytime={activity.Daytime}
                  time={activity.Time}
                  placeName={activity.PlaceName}
                  address={activity.Address}
                  ratings={activity.Ratings}
                  description={activity.ShortDescription}
                  // food={activity.Food}
                  // leisure={activity.Leisure}
                  // entertainment={activity.Entertainment}
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
