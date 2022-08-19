import React, { Fragment } from "react";
import data from "./yelpdummydata";

const YelpIndex = ({ yelpArray }) => {
  let yelpItems;
  {
    yelpArray?.length > 0 &&
      (yelpItems = yelpArray.map((item, i) => {
        return (
          <div>
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
          </div>
        );
      }));
  }
  return (
    <Fragment>
      <div className="cell small-4 medium-4 large-2">{yelpItems}</div>
      {yelpArray?.length > 0 && <h4>Suggestions:</h4>}
    </Fragment>
  );
};

export default YelpIndex;
