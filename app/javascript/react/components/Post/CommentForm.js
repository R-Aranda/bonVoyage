import axios from "axios";
import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import "./PostForm.css";

const CommentForm = ({ post_id, comments }) => {
  const commentInputs = useSelector((state) => state.commentInputs);
  const initialData = {
    body: "",
  };
  const onSubmit = (e) => {
    axios.post("/api/v1/comments", { ...commentInputs }).then((resp) => {
      dispatch(setComments(comments.concat(resp.data)));
      dispatch(
        setCommentInputs({
          body: "",
        })
      ).catch((resp) => {
        console.log(resp.message);
      });
    });
  };

  const validate = (e) => {
    const errors = {};
    if (e.body && e.body.length < 5) {
      errors.body = "Too Short";
    }
    return errors;
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialData}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="floated-label-wrapper">
              <Field
                name="body"
                render={({ input, meta }) => (
                  <div>
                    <textarea
                      {...input}
                      placeholder="Your comment here..."
                      name="title"
                      id="title"
                      type="text"
                    />
                    {meta.touched && meta.error && <div>{meta.error}</div>}
                  </div>
                )}
              />
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default CommentForm;
