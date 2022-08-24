import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { makeRequest } from "../../services/makeRequest";

const LandingPagePost = ({ post, currentUser }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState();

  const handleLike = () => {
    if (post.current_user == null) {
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
      if (post.post_likes[i].user_id === post.current_user?.id) {
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
    <div className="landing-page-post-item">
      <Link
        className="landing-page-post-link"
        to={`countries/${post.country.slug}`}
      >
        <h4 className="post-item-header">{post.country.name}</h4>
      </Link>
      <Link
        to={`countries/${post.country.slug}/posts/${post.id}`}
        className="post-header"
      >
        <h4>{post.title}</h4>
      </Link>
      <div className="post-body">{post.body}</div>

      <div className="post-footer grid-x">
        <FontAwesomeIcon
          onClick={handleLike}
          className={heartColor}
          icon="fa-solid fa-heart"
        />
        <span className="like-count">{likeCount}</span>
        <Link to={`countries/${post.country.slug}/posts/${post.id}`}>
          <FontAwesomeIcon className="comment-icon" icon="fa-solid fa-reply" />
        </Link>
        {currentUser?.id === post.user_id && (
          <Fragment>
            <FontAwesomeIcon
              className="comment-icon"
              icon="fa-solid fa-pen-to-square"
            />
          </Fragment>
        )}
        <span className="post-date cell small-6 align-middle">
          Posted by{" "}
          <strong className="footer-username">{post.user?.username}</strong>{" "}
          {moment(post.created_at)
            .local()
            .startOf("seconds")
            .fromNow()}
        </span>

        {post.comments.length === 1 ? (
          <span className="reply-count">
            <Link to={`countries/${post.country.slug}/posts/${post.id}`}>
              {post.comments.length} reply
            </Link>
          </span>
        ) : post.comments.length > 1 ? (
          <span className="reply-count">
            <Link to={`countries/${post.country.slug}/posts/${post.id}`}>
              {post.comments.length} replies{" "}
            </Link>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LandingPagePost;
