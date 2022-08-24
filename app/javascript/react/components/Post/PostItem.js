import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { makeRequest } from "../../services/makeRequest";

const PostItem = ({ post, currentUser }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState();
  const handleLike = () => {
    if (currentUser == null) {
      return (window.location.href = "/users/sign_in");
    }
    let message = {
      liked: true,
      post_id: post.id,
      user_id: post.user.id,
    };
    makeRequest("/post_likes", {
      method: "POST",
      data: message,
    }).then((res) => {
      setLiked(res.liked);
      setLikeCount(res.likeCount);
    });
  };

  let heartColor = "heart-icon";
  const likeStatus = () => {
    for (let i = post.post_likes.length - 1; i > -1; i--) {
      if (post.post_likes[i].user_id === currentUser?.id) {
        setLiked(true);
      }
    }
  };

  if (liked) {
    heartColor = "heart-icon-liked";
  }

  useEffect(() => {
    likeStatus();
    setLikeCount(post.post_likes.length);
  }, []);

  return (
    <div className="post-item">
      <Link to={`posts/${post.id}`} className="post-header">
        <h4>{post.title}</h4>
      </Link>
      <div className="post-body">{post.body}</div>
      <div className="post-date">
        Posted by: <strong>{post.user?.username}</strong>{" "}
        {moment(post.created_at)
          .local()
          .startOf("seconds")
          .fromNow()}
      </div>
      <div className="post-footer">
        <FontAwesomeIcon
          onClick={handleLike}
          className={heartColor}
          icon="fa-solid fa-heart"
        />
        <span className="like-count">{likeCount}</span>
        <Link to={`posts/${post.id}`}>
          <FontAwesomeIcon className="comment-icon" icon="fa-solid fa-reply" />
        </Link>
        {currentUser?.id === post.user_id && (
          <Fragment>
            <FontAwesomeIcon
              className="comment-icon"
              icon="fa-solid fa-pen-to-square"
            />
            <FontAwesomeIcon
              className="comment-icon trash"
              icon="fa-solid fa-trash-can"
            />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default PostItem;
