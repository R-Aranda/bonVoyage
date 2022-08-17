import React from "react";
import { Link } from "react-router-dom";

const CountryItem = ({ name, slug }) => {
  return (
    <div className="card">
      <h3 className="card-divider">{name}</h3>
      <img src="https://ak-d.tripcdn.com/images/01063120009ea6r6298F7_Z_640_10000_R5.jpg" />
      <div className="card-section">
        <h4>Country Card</h4>
        <p>This is the description</p>
        <Link to={`/countries/${slug}`}>Click here</Link>
      </div>
    </div>
  );
};

export default CountryItem;
