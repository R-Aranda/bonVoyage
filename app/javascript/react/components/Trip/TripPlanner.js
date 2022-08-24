import React, { useEffect, useState } from "react";
import { makeRequest } from "../../services/makeRequest";

const TripPlanner = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    makeRequest(`/users/1`).then((res) => setTrips(res.trips));
  }, []);

  return (
    <div>
      <div>{trips[0]?.name}</div>
    </div>
  );
};

export default TripPlanner;
