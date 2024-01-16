import React from "react";
import styles from "./plan.module.css";
import FormSection from "../FormSection/FormSection";


function Plan() {
  
  return (
    <>
      <div
        className={styles.planMain_container}
        style={{ backgroundImage: 'url("images/plan.jpg")' }}
      >
        <div className={styles.plan_heading}>
          <p>Plan your trip to India in seconds</p>
        </div>
           <FormSection/>

      </div>
    </>
  );
}

export default Plan;
