import React from 'react';
import styles from './Navigation.module.css';
import { useNavigate } from "react-router-dom";

function Navigation() {
  const Navigator=useNavigate()
  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.logo}>
          <p>travelAI</p>
        </div>
        <ul className="nav-links">
          <li onClick={()=>{Navigator("/")
           console.log('clicked')}}>Home</li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;