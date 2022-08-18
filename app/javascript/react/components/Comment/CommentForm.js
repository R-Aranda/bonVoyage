import React, { Fragment } from "react";
import { Form, Field } from "react-final-form";
import { usePost } from "../../contexts/PostContext";
import { createComment } from "../../services/comment";
import { useAsyncFn } from "../../hooks/useAsync";

const CommentForm = () => {
  const { post, createLocalComment, errors } = usePost();
  const { loading, error, execute: createCommentFn } = useAsyncFn(
    createComment
  );

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  const onCommentCreate = (message) => {
    return createCommentFn({ message, postId: post.id }).then(
      createLocalComment
    );
  };

  const handleSubmit = (values) => {
    onCommentCreate(values);
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
            <div className="comment-form-row">
              <Field name="body">
                {({ input }) => (
                  <textarea
                    className="comment-input"
                    placeholder="Your comment..."
                    type="text"
                    {...input}
                  />
                )}
              </Field>
              <button className="comment-submit-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </Form>
    </Fragment>
  );
};

export default CommentForm;
