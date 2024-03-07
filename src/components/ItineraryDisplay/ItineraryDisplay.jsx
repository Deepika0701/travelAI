import React from "react";
import styles from "./Itinerary.module.css";
import ItineraryCard from "../ItineraryCard/ItineraryCard";
function ItineraryDisplay() {
  return (
    <>
      <div
        className={styles.itineraryHeader}
        style={{ backgroundImage: 'url("images/agra.jpg")' }}
      >
        <div className={styles.numofdays}>
        <p>3 days in Agra</p>
        </div>
        <div className={styles.your_itinerary}>
        <p>Your itinerary</p>
      </div>
      </div>
    

      <div className={styles.flex_cards}>
        <div className={styles.days}>
          <p>Day 1</p>
        </div>
        <div className={styles.columnflex}>
          <div className={styles.card_margin}>
            <ItineraryCard />
          </div >
          <div className={styles.card_margin}>
            <ItineraryCard />
          </div>
          <div className={styles.card_margin}>
            <ItineraryCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItineraryDisplay;
