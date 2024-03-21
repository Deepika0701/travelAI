import React ,{useState} from 'react'
import ItineraryDisplay from '../components/ItineraryDisplay/ItineraryDisplay';
function Itinerary() {
  const [responseData, setResponseData] = useState(null);
  return (
    <>
    <ItineraryDisplay data={responseData}/>
    </>
  )
}

export default Itinerary