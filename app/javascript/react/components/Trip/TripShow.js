import React from "react";

const TripShow = ({ currentUser }) => {
  return (
    <div>
      <div>{currentUser?.trips[0].trip_name}</div>
    </div>
  );
};

export default TripShow;
