import React from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";

const CommentForm = ({ post_id }) => {
  const handleSubmit = async (values) => {
    values["post_id"] = post_id;
    axios.post("/api/v1/comments", values).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
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
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
    </Form>
  );
};

export default CommentForm;
