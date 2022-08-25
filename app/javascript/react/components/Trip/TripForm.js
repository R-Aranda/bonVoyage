import React, { Fragment, useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import Select from "react-select";
import { makeRequest } from "../../services/makeRequest";
import TripPlanner from "./TripPlanner";
import { createCity } from "../../services/city";

import { useAsyncFn } from "../../hooks/useAsync";

const TripForm = () => {
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState();
  const [destCounter, setDestCounter] = useState(0);
  const [trip, setTrip] = useState();
  const { execute: createCityFn } = useAsyncFn(createCity);

  const submitTrip = (values) => {
    return makeRequest("/trips", {
      method: "POST",
      data: values,
    });
  };

  const ReactSelectAdapter = ({ input, ...rest }) => (
    <Select {...input} {...rest} />
  );

  const submitDestination = (values) => {
    return makeRequest("/destinations", {
      method: "POST",
      data: values,
    }).then((res) => console.log("Trip created successfully", res));
  };

  const onSubmit = (values) => {
    setData(values.destinations);
    setTrip(values.name);
    values.destinations.forEach((dest) => {
      let message = { name: dest.city };
      createCityFn({ message, countryId: dest.country.value }).then((res) => {
        if (res.id) {
          setDestCounter(destCounter + 1);
        } else if (res?.status === 400) {
          setErrors(errors.concat(res.input));
        }
      });
    });
  };

  useEffect(() => {
    if (destCounter === data?.length && data?.length != 0) {
      submitTrip({ trip_name: trip }).then((res) => {
        data.forEach((dest) => {
          submitDestination({
            city_id: dest.city,
            trip_id: res.trip.id,
          });
        });
      });
    }
  }, [destCounter]);

  const options = [{ value: 165, label: "United States" }];
  return (
    <Fragment>
      {errors?.length > 0 && (
        <ul className="error">
          {errors.map((err, i) => {
            return <li key={i}>{err} was not found</li>;
          })}
        </ul>
      )}
      <Form
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
      />
    </Fragment>
  );
};

export default TripForm;
