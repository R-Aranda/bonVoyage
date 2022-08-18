import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { makeRequest } from "../../services/makeRequest";

const PostItem = ({ post, currentUser }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
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
  }, []);

  console.log(post.post_likes);

  return (
    <div className="post-item">
      <Link to={`posts/${post.id}`} className="post-header">
        <h4>{post.title}</h4>
      </Link>
      <div className="post-body">{post.body}</div>
      <div className="post-date">
        Posted by: {post.user?.username} {moment(post.created_at).format("LL")}
      </div>
      <div className="post-footer">
        <FontAwesomeIcon
          onClick={handleLike}
          className={heartColor}
          icon="fa-solid fa-heart"
        />
        <Link to={`posts/${post.id}`}>
          <FontAwesomeIcon className="comment-icon" icon="fa-solid fa-reply" />
        </Link>
        <FontAwesomeIcon
          className="comment-icon"
          icon="fa-solid fa-pen-to-square"
        />
      </div>
    </div>
  );
};

export default PostItem;
