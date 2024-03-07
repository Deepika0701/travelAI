import React from "react";
import styles from "./Service.module.css";
import Cards from "../Cards/cards";
import { useNavigate } from "react-router-dom";
function Service() {
  const Navigator=useNavigate()
  return (
    <>
      <div className={styles.service_container}>
        <div className={styles.service_heading}>
          <p>Services</p>
        </div>
        <div className={styles.service_cards}>
          <div className={styles.service_cards_child}>
            <Cards onClick={()=>{Navigator("/Plan")
           console.log('clicked')}} text="Plan your trip" img="images/service.png"/>
          </div>
          <div className={styles.service_cards_child}>
            <Cards text="Destination Recommendation" img="images/destination.png" />
          </div>
          <div className={styles.service_cards_child}>
            <Cards text="Connect & Collaborate" img="images/connectCollab.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
