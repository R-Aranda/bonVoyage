import React, { useState, Fragment, useEffect, useRef } from "react";
import { makeRequest } from "../../services/makeRequest";

const NewForm = () => {
  const [inputFields, setInputFields] = useState([{ city: "" }]);
  const autoCompleteRef = useRef();
  const [destinations, setDestinations] = useState([]);

  const handleAddFields = (props) => {
    const values = [...inputFields];
    values.push({ city: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    setDestinations(destinations.slice(0, -1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitTrip(JSON.stringify(destinations));
  };

  const submitTrip = (values) => {
    return makeRequest("/trips", {
      method: "POST",
      data: values,
    }).then((res) => console.log(res));
  };

  const inputs = document.getElementsByClassName("query");

  const options = {
    types: ["locality"],
    componentRestrictions: { country: "US" },
  };

  useEffect(() => {
    for (let i = 0; i < inputs.length; i++) {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputs[i],
        options
      );
      autoCompleteRef.current.addListener("place_changed", async function() {
        const place = await autoCompleteRef.current.getPlace();
        setDestinations(destinations.concat({ place }));
      });
    }
  }, [handleAddFields]);

  const resetForm = (e) => {
    setInputFields([{ city: "" }]);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>
            Trip Name
            <input type="text" className="trip_name" />
          </label>
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label>
                  City
                  <input id={index} className="query" type="text" />
                </label>
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="button"
                  type="button"
                  disabled={index === 0}
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="button"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button className="button" type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
          <button className="button" type="reset" onClick={resetForm}>
            Reset Form
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default NewForm;
