import React, { Fragment } from "react";
import data from "./yelpdummydata";

const YelpIndex = ({ yelpArray }) => {
  const yelpItems = data.map((item, i) => {
    // debugger;
    return (
      <div key={i} className="card">
        <div className="yelp-title">{item.categories[0].title}</div>
        <img src={item.image} />
        <div className="card-section">
          <h4>{item.name}</h4>
          <div>Located in {item.location}</div>
          <div>Rating: {item.rating}</div>
        </div>
      </div>
    );
  });
  return (
    <Fragment>
      <div className="cell small-2">{yelpItems}</div>
    </Fragment>
  );
};

export default YelpIndex;
