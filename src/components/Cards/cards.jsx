import React from 'react'
import styles from "./cards.module.css"
function cards({text,img,onClick}) {
  return (
    <div className={styles.card_container}>
        <div className={styles.card_image}>
            <img onClick={onClick} src={img} alt="" />
        </div>
        <div className={styles.card_text}>
            <p onClick={onClick}> {text}</p>
        </div>
    </div>
  )
}

export default cards