import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostInputs } from "../redux/actions/postActions";
import { Form, Field } from "react-final-form";

import "./PostForm.css";

const PostForm = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country.country);
  const handleSubmit = async (values) => {
    values["country_id"] = country.id;
    setPostInputs(values, dispatch);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="title">
            {({ input }) => (
              <input placeholder="Title" type="text" {...input} />
            )}
          </Field>
          <Field name="body">
            {({ input }) => <input placeholder="body" type="text" {...input} />}
          </Field>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      )}
    </Form>
  );
};

export default PostForm;
