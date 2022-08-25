import React, { Fragment, useEffect, useState, useRef } from "react";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import Select from "react-select";
import { makeRequest } from "../../services/makeRequest";
import { createCity } from "../../services/city";

import { useAsyncFn } from "../../hooks/useAsync";

const TripForm = () => {
  // const [errors, setErrors] = useState([]);
  // const [data, setData] = useState();
  // const [destCounter, setDestCounter] = useState(0);
  // const [trip, setTrip] = useState();
  // const { execute: createCityFn } = useAsyncFn(createCity);

  // const submitTrip = (values) => {
  //   return makeRequest("/trips", {
  //     method: "POST",
  //     data: values,
  //   });
  // };

  // const ReactSelectAdapter = ({ input, ...rest }) => (
  //   <Select {...input} {...rest} />
  // );

  // const submitDestination = (values) => {
  //   return makeRequest("/destinations", {
  //     method: "POST",
  //     data: values,
  //   });
  // };

  // const onSubmit = (values) => {
  //   setData(values.destinations);
  //   setTrip(values.name);
  //   values.destinations.forEach((dest) => {
  //     let message = { name: dest.city };
  //     createCityFn({ message, countryId: dest.country.value }).then((res) => {
  //       if (res.id) {
  //         setDestCounter(destCounter + 1);
  //       } else if (res?.status === 400) {
  //         setErrors(errors.concat(res.input));
  //       }
  //     });
  //   });
  // };

  // useEffect(() => {
  //   if (destCounter === data?.length && data?.length != 0) {
  //     submitTrip({ trip_name: trip }).then((res) => {
  //       console.log(res);
  //       data.forEach((dest) => {
  //         submitDestination({
  //           city_id: dest.city,
  //           trip_id: res.trip.id,
  //         });
  //       });
  //     });
  //   }
  // }, [destCounter]);
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  let autoComplete;

  // const envVariables = process.env;

  // const { GOOGLE_API_KEY } = envVariables;

  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystateChange = function() {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  const handleScriptLoad = (updateQuery, autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["cities"], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  };

  const handlePlaceSelect = (updateQuery) => {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  const options = [{ value: 165, label: "United States" }];
  return (
    <Fragment>
      <div className="search-location-input">
        <input
          ref={autoCompleteRef}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter a City"
          value={query}
        />
      </div>
      {/* <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators,
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push, pop },
          }, // injected from final-form-arrays above
          pristine,
          form,
          submitting,
          values,
          errors,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Trip Name</label>
                <Field name="name" component="input" />
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="button"
                  onClick={() => push("destinations", undefined)}
                >
                  Add Destination
                </button>
                <button
                  className="button"
                  type="button"
                  onClick={() => pop("destinations")}
                >
                  Remove Destination
                </button>
              </div>
              <FieldArray name="destinations">
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div key={name}>
                      <label>Destination {index + 1}</label>
                      <Field
                        name={`${name}.country`}
                        component={ReactSelectAdapter}
                        options={options}
                      />
                      <Field
                        name={`${name}.city`}
                        component="input"
                        placeholder="City"
                      />
                      <span
                        onClick={() => fields.remove(index)}
                        style={{ cursor: "pointer" }}
                      ></span>
                    </div>
                  ))
                }
              </FieldArray>
              <div className="buttons">
                <button
                  className="button"
                  type="submit"
                  disabled={submitting || pristine}
                >
                  Submit
                </button>
                <button
                  className="button"
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          );
        }}
      /> */}
    </Fragment>
  );
};

export default TripForm;
