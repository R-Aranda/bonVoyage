import React, { Fragment } from "react";
import data from "./yelpdummydata";

const YelpIndex = ({ yelpArray }) => {
  const yelpItems = data.map((item, i) => {
    // debugger;
    return (
      <div key={i} className="card align-right">
        <h5 className="yelp-title">{item.categories[0].title}</h5>
        <img src={item.image} />
        <div className="card-section">
          <h5>{item.name}</h5>
          <div>Located in {item.location}</div>
          <div>Rating: {item.rating}</div>
          <div>
            <a href={item.url} target="_blank">
              More info...
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <Fragment>
      <div className="cell small-4 medium-2">
        <h4>Suggestions:</h4>
        {yelpItems}
      </div>
    </Fragment>
  );
};

export default YelpIndex;
