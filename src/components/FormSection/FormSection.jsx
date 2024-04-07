import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import styles from "./FormSection.module.css";
import Button from "../Button/button";
import { DatePicker } from "antd";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "react-js-loader";

const { RangePicker } = DatePicker;

function FormSection() {
  const API_KEY = "AIzaSyDsdHgE_ib0YmbxLBJ6xAkOLnsB65R8ggc";
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const [dates, setDates] = useState([]);
  const [destination, setDestination] = useState("");
  const [companion, setCompanion] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

   const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const onSubmithandler = async (e) => {
    setLoading(true);
    const startDate = formatDate(dates[0]["$d"]);
    const endDate = formatDate(dates[1]["$d"]);
    console.log(startDate + ' - ' + endDate)
    e.preventDefault();

    const prompt = `Write a travel itinerary in JSON format for a ${companion} trip to ${destination} from ${startDate} to ${endDate}. Focus on a variety of activities, including sightseeing, cultural experiences, and family-friendly options. Include details like daytime (morning, afternoon, evening), time, place name, address, ratings (if available), and a short description for each activity. Suggest nearby places for breakfast, lunch, and dinner throughout the itinerary.
    Output should be in such format that I can directly parse it into JSON format i.e. without including any backticks and word JSON
    Here's an example format:
    
    {
      "Itinerary": [
        {
          "Day": "Friday",
          "Date": "2024-01-20",
          "Activities": [
            {
              "Daytime": "Morning",
              "Time": "07:00 AM",
              "Place Name": "Place Name",
              "Address": "Address",
              "Ratings": "4.5 (on Google Maps)",
              "Short Description": "Short Description",
              "Nearby": {
                "Breakfast": "Restaurant Name (Type),
                "Rating": (on Google Maps),
                "Distance from Place": (in metre or km)
                (a suggestion dont write google maps when you provide the details)
              }
            },
            ... other activities
          ]
        },
        ... other days
      ]
    }
    `

    
    try {  
      const response = await model.generateContent(prompt);
      const rawData=response.response.candidates[0].content.parts[0].text;
      console.log(rawData);
      setResponseData(rawData)
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false); // Set loading to false when done fetching
    }
  };

  if (responseData) {
    // console.log("p1",responseData);
    return <Navigate state={{data:responseData, destination:destination}} to={"/Itinerary"} />;
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
                  onChange={(dates) => {
                    if (dates && dates.length === 2) {
                      setDates(dates);
                    } else {
                      console.error("Please select both start and end dates.");
                    }
                  }}
                  format="YYYY-MM-DD"
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
              {loading && <Loader type="spinner-default" bgColor={"#000000"}  size={100} />} 
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormSection;