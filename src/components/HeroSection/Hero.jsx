import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/button"
import { useNavigate } from "react-router-dom";
function Hero() {
  const Navigator=useNavigate()
  return (

    <>
      <div
        className={styles.hero_container}
        style={{ backgroundImage: 'url("images/taj-mahal.jpg")' }}
      >
        <div className={styles.margin_hero}>
          <div className={styles.hero_heading}>
            <p>Explore the beauty of Agra</p>
          </div>
          <div className={styles.hero_description}>
            <p>
              Uncover the best kept secrets of Agra with our curated travel
              itineraries
            </p>
          </div> 
          <div className={styles.hero_btn}>
          <Button onClick={()=>{Navigator("/Itinerary")
           console.log('clicked')}}text="Click here"/>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Hero;
