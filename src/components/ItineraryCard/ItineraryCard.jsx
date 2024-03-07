import React from "react";
import styles from './ItineraryCard.module.css'
function ItineraryCard() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <p className={`styles.text-lg ${styles.font_semibold}`}>8:00 AM - 10:00 PM</p>
        <p className={`styles.text-gray-500 ${styles.dark_text_gray}`} >Daytime</p>
        <p>Taj Mahal</p>
        <p className={`styles.text_sm1 ${styles.text_gray_500 ,styles.dark_text_gray}`}>
        Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001
        </p>
  
        <div className={styles.stars}>
          <span className={styles.star}></span>
          <span className={styles.star}></span>
          <span className={styles.star}></span>
          <span className={styles.star}></span>
          <span className={`styles.star ${styles.muted}`}></span>
        </div>
      
        <p className={styles.text_sm}>
          This is a beautiful place to spend your day. With a variety of
          activities and beautiful scenery, you won't be disappointed.
        </p>
      </div>
      <div className={styles.image_container}>
        <img
          alt="Location Image"
          className="image"
          src="images/taj-mahal.jpg"
        />
      </div>
    </div>
  );
}

export default ItineraryCard;
