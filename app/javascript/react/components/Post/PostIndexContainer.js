import React from "react";
import moment from "moment";
import PostForm from "./PostForm";
import { Link } from "react-router-dom";

const PostIndexContainer = ({
  posts,
  handleChange,
  handleSubmit,
  postInputs,
  countrySlug,
}) => {
  let postsList;
  // debugger;

  if (posts) {
    postsList = posts.map((post) => {
      return (
        <div key={post.id} className="callout primary">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <p>Posted on: {moment(post.created_at).format("LL")}</p>
          <Link to={`${countrySlug}/posts/${post.id}`}>Visit Post</Link>
        </div>
      );
    });
  }

  return (
    <div>
      <div>
        <PostForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          postInputs={postInputs}
        />
      </div>
      <div>{postsList}</div>
    </div>
  );
};

export default PostIndexContainer;
