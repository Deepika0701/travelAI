import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from "./ItineraryCard.module.css";

const unsplashAccessKey = 'gM7QPAAEmxq98i3rdl137l9Q3xxPmNzF_VMRWir5B9E'; // Replace with your access key

function ItineraryCard({ daytime, time, placeName, address, ratings, description, food, destination }) {

  const [imageUrl, setImageUrl] = useState('img'); // Default image

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            client_id: unsplashAccessKey,
            query: `${placeName} ${destination}`,
            per_page: 1, // Get only 1 photo
            orientation: 'landscape',
          },
        });
        console.log(response.data)
        const photoData = response.data.results[0]; // Access the first photo data (if any)

        if (photoData) {
          setImageUrl(photoData.urls.regular); // Return the photo URL if found
        } else {
          setImageUrl('No results found for the search query.'); // Set a message if not found
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
        setImageUrl('Error fetching photo'); // Set an error message in case of issues
      }
    };
    fetchData();
  }, [placeName, address]); // Update imageUrl when placeName or address changes

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
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <p className={`styles.text-lg ${styles.font_semibold}`}> {daytime} | {time} </p><br />
          <p className={styles.font_bold}>{placeName}</p>
          <p className={`${styles.text_sm1} ${styles.text_gray_500} ${styles.dark_text_gray}`}>{address}</p>
          <div className={styles.stars}>
            {renderStars()}
          </div>
          <div className={styles.description}>
            <p className={styles.text_sm}>{description}</p>
          </div>
        </div>
        <div className={styles.image_container}>
          <img
            alt="Location Image"
            className={styles.image}
            src={imageUrl}
          />
        </div>
      </div>
      <div className={styles.food_Card}>
        <p>{food}</p>
      </div>
    </>
  );
}

export default ItineraryCard;
