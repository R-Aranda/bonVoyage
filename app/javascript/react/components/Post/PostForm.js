import React from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";

const PostForm = ({ country }) => {
  const handleSubmit = async (values) => {
    values["country_id"] = country.id;
    axios.post("/api/v1/posts", values).then((res) => {
      console.log(res);
      console.log(res.data);
    });
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
