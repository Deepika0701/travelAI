import React from 'react'
import styles from './FormSection.module.css'
import Button from "../Button/button";
import { DatePicker } from "antd";
import { useState } from "react";
import moment from "moment";
const { RangePicker } = DatePicker;

function FormSection() {
    const [dates, setDates] = useState([]);
  return (
    <>
            <div className={styles.planform_container}>
          <div className={styles.plan_form}>
            <p>Create a day by day trip plan customized to you</p>
            <form action="">
              <div className={styles.form_flex}>
                <div className={styles.text_form}>
                  <input type="text" placeholder="Enter destination(city)"/>
                </div>
                <div className={styles.date_form}>
                  <RangePicker
                    onChange={(values) => {
                      const value1 = moment(values[0]).format("DD-MM-YYYY");
                      setDates(values);
                    }}
                  />
                </div>
              </div>

              <div className={styles.planSelect}>
                <select className={styles.selectBox}>
                  <option value="0">Who are you travelling with</option>
                  <option value="1">Wandering solo</option>
                  <option value="2">Holidaying as a couple</option>
                  <option value="3">Vacationing with friends</option>
                  <option value="4">Traveling with family</option>
                </select>
              </div>

              <div className={styles.form_btn}>
                <Button text="Plan my trip"  />
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default FormSection