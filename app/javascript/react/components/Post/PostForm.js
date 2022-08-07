import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./PostForm.css";

const PostForm = ({ handleSubmit }) => {
  const postInputs = useSelector((state) => state.postInputs);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(
      setPostInputs({
        ...postInputs,
        [event.currentTarget.name]: event.currentTarget.value,
      })
    );
  };

  $(function() {
    var showClass = "show";

    $("input")
      .on("checkval", function() {
        var label = $(this).prev("label");
        if (this.value !== "") {
          label.addClass(showClass);
        } else {
          label.removeClass(showClass);
        }
      })
      .on("keyup", function() {
        $(this).trigger("checkval");
      });

    $("textarea")
      .on("checkval", function() {
        var label = $(this).prev("label");
        if (this.value !== "") {
          label.addClass(showClass);
        } else {
          label.removeClass(showClass);
        }
      })
      .on("keyup", function() {
        $(this).trigger("checkval");
      });
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="callout text-center"
      style={{ width: 700 }}
    >
      <h2>Submit a new Post</h2>
      <div className="floated-label-wrapper">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          id="title"
          value={postInputs.title}
          placeholder="Title"
        />
      </div>
      <div className="floated-label-wrapper">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          rows="3"
          onChange={handleChange}
          name="body"
          id="body"
          value={postInputs.body}
          placeholder="Post Description"
        />
      </div>

      <input type="submit" className="button" />
    </form>
  );
};

export default PostForm;
