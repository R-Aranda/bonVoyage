import React, { useEffect } from "react";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faHeart, faReply } from "@fortawesome/free-solid-svg-icons";

library.add(faEdit, faHeart, faReply);

const CommentsList = () => {
  const post = useSelector((state) => state.post.post);
  const comments = useSelector((state) => state.comment.comments);

  useEffect(() => {
    comments;
  }, [comments]);

  const commentsList = comments.map((comment) => {
    return (
      <div key={comment.id} className="comment-item">
        <span className="comment-body">{comment.body}</span>
        <span className="comment-date">
          {moment(comment.created_at).format("LL")}
        </span>
        <div className="comment-footer">
          <FontAwesomeIcon className="comment-icon" icon="fa-solid fa-heart" />
          <FontAwesomeIcon className="comment-icon" icon="fa-solid fa-reply" />
          <FontAwesomeIcon
            className="comment-icon"
            icon="fa-solid fa-pen-to-square"
          />
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="header">
        <h4>Comments:</h4>
      </div>
      <CommentForm post_id={post.id} comments={post.comments} />

      <div className="comments-list">{commentsList}</div>
    </div>
  );
};

export default CommentsList;
