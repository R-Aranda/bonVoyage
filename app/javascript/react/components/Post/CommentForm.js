import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { setCommentInputs } from "../redux/actions/commentActions";

const CommentForm = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);

  const handleSubmit = async (values) => {
    values["post_id"] = post.id;
    setCommentInputs(values, dispatch);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
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

export default CommentForm;
