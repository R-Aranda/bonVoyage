import React, { Fragment } from "react";
import moment from "moment";
import PostForm from "./PostForm";
import { Link } from "react-router-dom";

const PostIndexContainer = ({ posts, country }) => {
  const postsList = posts.map((post) => {
    return (
      <div key={post.id} className="callout primary">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <p>Posted on: {moment(post.created_at).format("LL")}</p>
        <Link to={`posts/${post.id}`}>Visit Post</Link>
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
