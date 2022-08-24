import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { makeRequest } from "../../services/makeRequest";
import { deletePost } from "../../services/post";
import { useAsyncFn } from "../../hooks/useAsync";
import { useCountry } from "../../contexts/CountryContext";

const PostItem = ({ post, currentUser }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState();
  const { deleteLocalPost } = useCountry();
  const onDeletePost = useAsyncFn(deletePost);

  const handleDelete = () => {
    onDeletePost.execute(post.id).then((post) => {
      deleteLocalPost(post);
    });
  };

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
        <h4 className="post-item-header">{post.title}</h4>
      </Link>
      <div className="post-body">{post.body}</div>
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
              onClick={handleDelete}
              className="comment-icon trash"
              icon="fa-solid fa-trash-can"
            />
          </Fragment>
        )}
        <div className="post-date">
          Posted by{" "}
          <strong className="footer-username">{post.user?.username}</strong>{" "}
          {moment(post.created_at)
            .local()
            .startOf("seconds")
            .fromNow()}
        </div>
        {post.comments.length === 1 ? (
          <span className="reply-count">{post.comments.length} reply</span>
        ) : post.comments.length > 1 ? (
          <span className="reply-count">{post.comments.length} replies </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PostItem;
