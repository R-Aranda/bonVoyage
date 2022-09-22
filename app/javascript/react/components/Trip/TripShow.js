import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const TripShow = ({ currentUser }) => {
  const [trip, setTrip] = useState({});
  const [destinations, setDestinations] = useState([]);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const getTrip = async () => {
      const response = await axios.get(
        `/api/v1/trips/${currentUser?.trips[currentUser?.trips.length - 1].id}`
      );
      const data = response.data;
      setTrip(data);
      setDestinations(data?.destinations);
    };
    getTrip();
  }, [currentUser]);

  let destArray;
  if (destinations?.length > 0) {
    destArray = destinations.map((dest) => {
      return <li key={dest.id}>{dest.name}</li>;
    });
  }

  const updateTrip = () => {
    axios
      .put(
        `/api/v1/trips/${currentUser?.trips[currentUser?.trips.length - 1].id}`,
        {
          trip_name: "test",
        }
      )
      .then((res) => {
        setUpdates(res.data);
      });
  };

  return (
    <div>
      {updates.length > 0 && <div>{updates[0]}</div>}
      <h2>{trip?.trip_name}</h2>
      <ul>{destArray}</ul>
      <div>
        <button className="button" onClick={updateTrip}>
          Update Trip
        </button>
      </div>
    </div>
  );
};

export default TripShow;
