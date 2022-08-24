import React, { useState, useEffect, Fragment } from "react";
import { Form, Field } from "react-final-form";
import { makeRequest } from "../../services/makeRequest";
import TripPlanner from "./TripPlanner";

const TripForm = () => {
  const handleSubmit = (values) => {
    return makeRequest("/trips", {
      method: "POST",
      data: values,
    });
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="post-form-row">
              <div className="post-input-container">
                <Field name="name">
                  {({ input }) => (
                    <input
                      className="post-input-title"
                      placeholder="Trip Name..."
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
              </div>
              <button className="post-submit-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </Form>
      <TripPlanner />
    </Fragment>
  );
};

export default TripForm;
