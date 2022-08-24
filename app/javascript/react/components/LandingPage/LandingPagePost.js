import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { makeRequest } from "../../services/makeRequest";
import { deletePost } from "../../services/post";
import { useAsyncFn } from "../../hooks/useAsync";

const LandingPagePost = ({ post, currentUser }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState();

  const { execute: onDeletePost } = useAsyncFn(deletePost);

  const handleDelete = () => {
    onDeletePost(post.id);
  };

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
        <h4 className="landing-page-post-header">{post.country.name}</h4>
      </Link>
      <Link
        to={`countries/${post.country.slug}/posts/${post.id}`}
        className="post-header"
      >
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
        <Link to={`countries/${post.country.slug}/posts/${post.id}`}>
          <FontAwesomeIcon className="comment-icon" icon="fa-solid fa-reply" />
        </Link>
        {currentUser?.id === post.user_id && (
          <Fragment>
            <FontAwesomeIcon
              className="comment-icon"
              icon="fa-solid fa-pen-to-square"
            />
            <div onClick={handleDelete}>
              <FontAwesomeIcon
                className="comment-icon trash"
                icon="fa-solid fa-trash-can"
              />
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default LandingPagePost;
