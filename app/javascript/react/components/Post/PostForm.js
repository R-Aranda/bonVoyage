import React, { Fragment } from "react";
import { Form, Field } from "react-final-form";
import { useCountry } from "../../contexts/CountryContext";
import { createPost } from "../../services/post";
import { useAsyncFn } from "../../hooks/useAsync";

const PostForm = () => {
  const { country, createLocalPost, errors } = useCountry();
  const { loading, error, execute: createPostFn } = useAsyncFn(createPost);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  const onPostCreate = (message) => {
    return createPostFn({ message, countryId: country.id }).then(
      createLocalPost
    );
  };

  const handleSubmit = (values) => {
    onPostCreate(values);
  };

  return (
    <Fragment>
      {errors.length > 0 && (
        <ul className="error">
          {errors.map((err, i) => {
            return <li key={i}>{err}</li>;
          })}
        </ul>
      )}
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
    </Fragment>
  );
};

export default PostForm;
