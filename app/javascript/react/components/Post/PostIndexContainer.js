import React, { Fragment } from "react";
import moment from "moment";
import PostForm from "./PostForm";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostIndexContainer = ({ posts, country }) => {
  const postsList = posts.map((post) => {
    return (
      <div key={post.id} className="post-item">
        <Link to={`posts/${post.id}`} className="post-header">
          <h4>{post.title}</h4>
        </Link>
        <div className="post-body">{post.body}</div>
        <div className="post-date">
          Posted on: {moment(post.created_at).format("LL")}
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

  return (
    <Fragment>
      <div>
        <PostForm country={country} />
      </div>
      {postsList}
    </Fragment>
  );
};

export default PostIndexContainer;
