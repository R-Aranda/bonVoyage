import React, { Fragment } from "react";
import data from "./yelpdummydata";

const YelpIndex = ({ yelpArray }) => {
  let yelpItems;
  {
    yelpArray?.length > 0 &&
      (yelpItems = yelpArray.map((item, i) => {
        return (
          <div key={i} className="yelp-card card align-right">
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
      }));
  }
  return (
    <Fragment>
      {yelpArray?.length > 0 && (
        <div className="yelp-container cell small-6 medium-6 large-4">
          <h4 className="skyscanner-header">Suggestions</h4>
          {yelpItems}
        </div>
      )}
    </Fragment>
  );
};

export default YelpIndex;
