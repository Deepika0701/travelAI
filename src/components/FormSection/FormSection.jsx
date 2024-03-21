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
        "content-type": "application/json",
        "X-RapidAPI-Key": "7e5061a38fmshd1e129232799580p15e432jsna71e642bee34",
        "X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com",
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
      // const response = await fetch(url, options);
      // const result = await response.json();
      const result = 
      [
          {
              "Date": "March 22, 2024",
              "Destination": "Jaipur",
              "Companion": "Solo Traveler",
              "Day1": [
                  {
                      "Daytime": "Morning",
                      "Time": "8:00 AM - 10:00 AM",
                      "PlaceName": "Amer Fort",
                      "Address": "Devisinghpura, Amer, Jaipur, Rajasthan 302001 India",
                      "Ratings": 4.6,
                      "ShortDescription": "Start your journey with a visit to the majestic Amber Palace.",
                      "Food": {
                          "Breakfast": "Café Coffee Day (7:30 AM - 9:30 PM), Located at Near Jal Mahal, Amer Rd, Jaipur, Rajasthan 302002, Rating: 4.2"
                      }
                  },
                  {
                      "Daytime": "Afternoon",
                      "Time": "11:00 AM - 1:00 PM",
                      "PlaceName": "City Palace",
                      "Address": "Tulsi Marg, Gangori Bazaar, Jaipur, Rajasthan 302002 India",
                      "Ratings": 4.5,
                      "ShortDescription": "Explore City Palace, one of the most famous tourist attractions in Jaipur.",
                      "Food": {
                          "Lunch": "Indian Coffee House (9:00 AM - 9:00 PM) located at Jawahar Lal Nehru Marg, MI Road, near Vidhan Sabha, Jaipur, Rajasthan 302001, Rating: 4.2"
                      },
                      "Leisure": {
                          "Activity": "Post-lunch shopping at Johari bazaar (open until 9 PM)"
                      }
                  },
                  {
                      "Daytime": "Evening",
                      "Time": "5:00 PM - 7:00 PM",
                      "PlaceName": "Hawa Mahal",
                      "Address": "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002 India",
                      "Ratings": 4.4,
                      "ShortDescription": "Capture stunning sunset photos at Hawa Mahal before visiting local markets.",
                      "Food": {
                          "Dinner": "Chokhi Dhani (5:30 PM - 11 PM), 12 Miles From Jaipur, Tonk Road, Exit No. 8, Jaipur, Rajasthan 302028, Rating: 4.4"
                      },
                      "Entertainment": {
                          "Event": "Traditional Dance & Music Performances during dinner at Choki Dhani"
                      }
                  }
              ]
          },
          {
              "Date": "March 23, 2024",
              "Destination": "Jaipur",
              "Companion": "Solo Traveler",
              "Day2": [
                  {
                      "Daytime": "Morning",
                      "Time": "9:00 AM - 10:30 AM",
                      "PlaceName": "Jantar Mantar Observatory",
                      "Address": "Gangori Bazaar, J.D.A. Market, Kanwar Nagar, Jaipur, Rajasthan 302002 India",
                      "Ratings": 4.6,
                      "ShortDescription": "Discover astronomical instruments dating back centuries ago.",
                      "Food": {
                          "Breakfast": "Neros (8:30 AM - 10:30 PM), C Scheme, Jacob Road Crossing, Jaipur, Rajasthan 302001, Rating: 4.4"
                      }
                  },
                  {
                      "Daytime": "Afternoon",
                      "Time": "12:00 PM - 2:00 PM",
                      "PlaceName": "Albert Hall Museum",
                      "Address": "Adarsh Nagar, Ram Niwas Garden, Jaipur, Rajasthan 302004 India",
                      "Ratings": 4.4,
                      "ShortDescription": "Visit Albert Hall Museum showcasing artifacts reflecting Rajputana, Persia and Europe history.",
                      "Food": {
                          "Lunch": "Anokhi Cafe (9:30 AM - 10:00 PM), 2nd Floor, C-11 Prithviraj Road, C scheme, Ashok Nagar, Jaipur, Rajasthan 302001, Rating: 4.4"
                      }
                  },
                  {
                      "Daytime": "Evening",
                      "Time": "4:00 PM - 6:00 PM",
                      "PlaceName": "Birla Mandir Temple",
                      "Address": "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur, Rajasthan 302004 India ",
                      "Ratings": 4.5,
                      "ShortDescription": "Experience tranquility while exploring this beautiful white marble temple dedicated to Lord Vishnu.",
                      "Food": {
                        "Dinner": "Steam Restaurant And Bar (12:30 PM - 12:00 AM), Ahinsa Circle, opp. Hotel Om Tower, C-Scheme, Ashok Nagar, Jaipur, Rajasthan 302001, Rating: 4.3"
                    }
                  }
              ]
          }
      ]
      
      setResponseData(result);
      console.log(result.JSON)
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
