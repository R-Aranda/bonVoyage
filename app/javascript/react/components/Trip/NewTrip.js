import React, { useState, Fragment, useEffect, useRef } from "react";
import { makeRequest } from "../../services/makeRequest";
import { useNavigate } from "react-router-dom";

const NewTrip = ({ currentUser }) => {
  const [inputFields, setInputFields] = useState([{ city: "" }]);
  const autoCompleteRef = useRef();
  const [destinations, setDestinations] = useState([]);
  const [tripName, setTripName] = useState({});
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleTripInput = (e) => {
    setTripName({
      ...tripName,
      trip: e.currentTarget.value,
    });
  };

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
    submitTrip({
      trip_name: tripName,
      destinations: destinations,
    });
  };

  const submitTrip = (values) => {
    return makeRequest("/trips", {
      method: "POST",
      data: values,
    }).then((res) => {
      if (res.errors) {
        setErrors(res.errors);
      } else if (res.status === 200) {
        // navigate(
        //   `/users/${currentUser.username}/trips/${res.response.trip.id}`
        // );
        window.location.href = `/users/${currentUser.username}/trips/${res.response.trip.id}`;
      }
    });
  };

  const inputs = document.getElementsByClassName("query");

  const options = {
    types: ["locality"],
  };

  useEffect(() => {
    for (let i = 0; i < inputs.length; i++) {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputs[i],
        options
      );
      autoCompleteRef.current.addListener("place_changed", async function() {
        const place = await autoCompleteRef.current.getPlace();
        let location = place.formatted_address;
        let cityName = place.name;
        let country =
          place.address_components[place.address_components.length - 1];

        setDestinations(
          destinations.concat({
            location: location,
            city: cityName,
            country: country,
          })
        );
      });
    }
  }, [handleAddFields]);

  const resetForm = (e) => {
    setInputFields([{ city: "" }]);
  };

  return (
    <Fragment>
      {errors && <div>{errors}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>
            Trip Name
            <input
              type="text"
              className="trip_name"
              onChange={handleTripInput}
            />
          </label>
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label>
                  {index === 0 ? "Departing City" : `City #${index}`}
                  <input id={index} className="query" type="text" />
                </label>
              </div>
            </Fragment>
          ))}
          <div className="form-group col-sm-2">
            <button
              className="button"
              type="button"
              onClick={() => handleRemoveFields(inputs.length - 1)}
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

export default NewTrip;
