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
          <div className="post-form-row">
            <div className="post-input-container">
              <Field name="title">
                {({ input }) => (
                  <input
                    className="post-input-title"
                    placeholder="Title"
                    type="text"
                    {...input}
                  />
                )}
              </Field>
              <Field name="body">
                {({ input }) => (
                  <textarea
                    className="post-input"
                    placeholder="body"
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
  );
};

export default PostForm;
