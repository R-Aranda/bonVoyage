import React from "react";
import { Form, Field } from "react-final-form";
import { useCountry } from "../../contexts/CountryContext";
import { createPost } from "../../services/post";
import { useAsyncFn } from "../../hooks/useAsync";

const PostForm = () => {
  const { country } = useCountry();
  const { loading, error, execute: createPostFn } = useAsyncFn(createPost);

  const onPostCreate = (message) => {
    return createPostFn({ message, countryId: country.id });
  };

  const handleSubmit = (values) => {
    onPostCreate(values);
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
