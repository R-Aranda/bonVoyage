import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { makeRequest } from "../../services/makeRequest";

const CommentItem = ({ comment, currentUser }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    if (currentUser == null) {
      return (window.location.href = "/users/sign_in");
    }
    let message = {
      liked: true,
      comment_id: comment.id,
      user_id: comment.user.id,
    };
    makeRequest("/comment_likes", {
      method: "POST",
      data: message,
    }).then((res) => {
      setLiked(res.liked);
      setLikeCount(res.likeCount);
    });
  };

  let heartColor = "heart-icon";
  const likeStatus = () => {
    for (let i = comment.comment_likes.length - 1; i > -1; i--) {
      if (comment.comment_likes[i].user_id === currentUser?.id) {
        setLiked(true);
      }
    }
  };

  if (liked) {
    heartColor = "heart-icon-liked";
  }

  useEffect(() => {
    likeStatus();
    setLikeCount(comment.comment_likes.length);
  }, []);
  return (
    <div key={comment.id} className="comment-item">
      <span className="comment-body">{comment.body}</span>
      <span className="comment-date">
        Posted by {comment.user.username}{" "}
        {moment(comment.created_at)
          .local()
          .startOf("seconds")
          .fromNow()}
      </span>
      <div className="comment-footer">
        <FontAwesomeIcon
          onClick={handleLike}
          className={heartColor}
          icon="fa-solid fa-heart"
        />
        <span className="like-count">{likeCount}</span>
        <FontAwesomeIcon className="comment-icon" icon="fa-solid fa-reply" />
        <FontAwesomeIcon
          className="comment-icon"
          icon="fa-solid fa-pen-to-square"
        />
      </div>
    </div>
  );
};

export default CommentItem;
