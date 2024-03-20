import React, { useEffect } from "react";
import styles from "./FormSection.module.css";
import Button from "../Button/button";
import { DatePicker } from "antd";
import { useState } from "react";
import moment from "moment";
import { Navigate } from "react-router-dom";
const { RangePicker } = DatePicker;

function FormSection() {
  const [dates, setDates] = useState([]);
  const [destination, setDestination] = useState("");
  const [companion, setCompanion] = useState("");
  const [responseData, setResponseData] = useState(null);


  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  

  const onSubmithandler = async (e) => {
    
    const startDate = formatDate(dates[0]["$d"]);
    const endDate = formatDate(dates[1]["$d"]);
    console.log(startDate + ' - ' + endDate)
    
    e.preventDefault();
    const url = "https://chatgpt-42.p.rapidapi.com/conversationgpt4";
    const options = {
      method: "POST",
      headers: {
        'content-type': 'application/json',
		'X-RapidAPI-Key': '81e293922amsh279e6d43e312e4fp18ece7jsn42e5df699d02',
		'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com',
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: `Provide a complete personalized itinerary based on the user's preferences. The program should take the following inputs:
            - Date : ${startDate} - ${endDate}
            - Destination :${destination}
            - Companion : ${companion}.
            The program should generate an itinerary in JSON format with the following details for each day: 
            - Daytime: Indicate whether it's morning, afternoon, or evening. 
            - Time: Specify the time of the activity. 
            - Place Name: Provide the name of the place or activity. 
            - Address: Include the address or location details. 
            - Ratings: Include ratings or reviews for the place. 
            Short Description: Provide a brief description or highlight of the activity.Additionally, the program should suggest nearby places for food, considering breakfast, lunch, and dinner times. 
            Ensure that the itinerary is diverse, covering various activities such as sightseeing, dining, and entertainment. Take into account the preferences of the user and their companion. Insert NA in the place of the value for which you don't have real values
            `,
          },
        ],
        system_prompt: "",
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 10000,
        web_access: true,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      
      setResponseData(result);
      console.log(result)
    } catch (error) {
      console.error(error);
    }
  };

  if (responseData) {
    return <Navigate state={{data:responseData}} to={"/Itinerary"} />;
  }

  return (
    <>
      <div className={styles.planform_container}>
        <div className={styles.plan_form}>
          <p>Create a day by day trip plan customized to you</p>
          <form onSubmit={onSubmithandler}>
            <div className={styles.form_flex}>
              <div className={styles.text_form}>
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  type="text"
                  placeholder="Enter destination(city)"
                />
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
              <select
                value={companion}
                onChange={(e) => setCompanion(e.target.value)}
                className={styles.selectBox}
              >
                <option selected value="0">
                  Who are you travelling with
                </option>
                <option value="Solo Traveller">Wandering solo</option>
                <option value="HCouple trip">
                  Holidaying as a couple
                </option>
                <option value="Travelling with friends">
                  Vacationing with friends
                </option>
                <option value="Traveling with family">
                  Traveling with family
                </option>
              </select>
            </div>

            <div className={styles.form_btn}>
              <Button type={"submit"} text="Plan my trip" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormSection;
