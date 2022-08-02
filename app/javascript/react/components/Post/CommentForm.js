import React from "react";

const CommentForm = ({ handleChange, handleSubmit, commentInput }) => {
  $(function() {
    var showClass = "show";

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
      <h2>Reply to thread</h2>

      <div className="floated-label-wrapper">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          rows="3"
          onChange={handleChange}
          name="body"
          id="body"
          value={commentInput.body}
          placeholder="Post Description"
        />
      </div>

      <input type="submit" className="button" />
    </form>
  );
};

export default CommentForm;
