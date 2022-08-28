import React, { useState, Fragment, useEffect, useRef } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const NewForm = () => {
  const [inputFields, setInputFields] = useState([{ city: "" }]);
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ city: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    // debugger;
    const values = [...inputFields];
    if (event.target.name === "city") {
      values[index].city = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    alert(JSON.stringify(inputFields, null, 2));
  };

  const options = {
    types: ["locality"],
    componentRestrictions: { country: "US" },
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function() {
      const place = await autoCompleteRef.current.getPlace();
      console.log({ place });
    });
  }, []);

  const resetForm = (e) => setInputFields([{ city: "" }]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label htmlFor="city">City</label>
                <GooglePlacesAutocomplete
                  autocompletionRequest={{
                    types: ["(cities)"],
                  }}
                />
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
            Save
          </button>
          <button className="button" type="reset" onClick={resetForm}>
            Reset Form
          </button>
        </div>
        <br />
        <pre>{JSON.stringify(inputFields, null, 2)}</pre>
      </form>
    </>
  );
};

export default NewForm;
