import React from 'react';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.logo}>
          <p>travelAI</p>
        </div>
        <ul className="nav-links">
          <li>Home</li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;