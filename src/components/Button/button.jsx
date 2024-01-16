import React from 'react'
import styles from './button.module.css'
function button({text,onClick}) {
  return (
    <div>
         <button onClick={onClick} className={styles.primary_btn}>
            {text}
          </button>
    </div>
  )
}

export default button