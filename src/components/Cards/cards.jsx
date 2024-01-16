import React from 'react'
import styles from "./cards.module.css"
function cards({text,img}) {
  return (
    <div className={styles.card_container}>
        <div className={styles.card_image}>
            <img src={img} alt="" />
        </div>
        <div className={styles.card_text}>
            <p> {text}</p>
        </div>
    </div>
  )
}

export default cards