import React from 'react'
import styles from './About.module.css';
function About() {
  return (
    <>
    <div className={styles.about_bg}>
    <div className={styles.about_heading}>
      <p>About Us</p>
    </div>
    <div className={styles.about_description}>
      <p>travelAI is a India-based travel itinerary company that is dedicated to providing seamless and personalized travel experiences. </p>
      <p>Whether you're a solo traveler, a couple, or a group, travelAI ensures that every journey is tailored to exceed your expectations.</p>
    </div>
    </div>
    </>
  )
}

export default About