import React from "react";
import styles from './ItineraryCard.module.css';

function ItineraryCard({ daytime, time, placeName, address, ratings, description }) {
  // Calculate the number of filled stars based on ratings 
  const filledStars = Math.round(ratings);
  // Calculate the number of empty stars
  const emptyStars = 5 - filledStars;

  const renderStars = () => {
    const stars = [];
    // Add filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i} className={styles.star}></span>);
    }
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={i + filledStars} className={` ${styles.muted}`}></span>);
    }
    return stars;
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <p className={`styles.text-lg ${styles.font_semibold}`}> {daytime} | {time} </p><br />
        <p className={styles.font_bold}>{placeName}</p>
        <p className={`${styles.text_sm1} ${styles.text_gray_500} ${styles.dark_text_gray}`}>{address}</p>
  
        <div className={styles.stars}>
          {renderStars()}
        </div>
      
        <p className={styles.text_sm}>{description}</p>
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
