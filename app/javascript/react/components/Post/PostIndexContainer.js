import React, { Fragment } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCountry } from "../../contexts/CountryContext";

const PostIndexContainer = () => {
  const { posts } = useCountry();

  const postsList = posts.map((post) => {
    return (
      <div key={post.id} className="post-item">
        <Link to={`posts/${post.id}`} className="post-header">
          <h4>{post.title}</h4>
        </Link>
        <div className="post-body">{post.body}</div>
        <div className="post-date">
          Posted by: {post.user?.username}{" "}
          {moment(post.created_at).format("LL")}
        </div>
        <div className="post-footer">
          <FontAwesomeIcon className="comment-icon" icon="fa-solid fa-heart" />
          <Link to={`posts/${post.id}`}>
            <FontAwesomeIcon
              className="comment-icon"
              icon="fa-solid fa-reply"
            />
          </Link>
          <FontAwesomeIcon
            className="comment-icon"
            icon="fa-solid fa-pen-to-square"
          />
        </div>
      </div>
    );
  });

  return <Fragment>{postsList}</Fragment>;
};

export default PostIndexContainer;
