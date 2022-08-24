import React, { useEffect, useState } from "react";
import { makeRequest } from "../../services/makeRequest";
import Select from "react-select";

const TripPlanner = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    makeRequest(`/users/1`).then((res) => setTrips(res.trips));
  }, []);

  const options = [
    { value: "france", label: "France" },
    { value: "canada", label: "Canada" },
    { value: "united States", label: "United States" },
  ];

  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default TripPlanner;
