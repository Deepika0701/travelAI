import React from 'react'
import styles from './button.module.css'
function button({text,onClick,type}) {
  return (
    <div>
         <button type={type?type:'button'} onClick={onClick} className={styles.primary_btn}>
            {text}
          </button>
    </div>
  )
}

export default button