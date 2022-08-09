import React, { useEffect } from "react";
import moment from "moment";
import PostForm from "./PostForm";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostIndexContainer = ({}) => {
  const posts = useSelector((state) => state.post.posts);

  let postsList;
  {
    posts &&
      (postsList = posts.map((post) => {
        return (
          <div key={post.id} className="callout primary">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <p>Posted on: {moment(post.created_at).format("LL")}</p>
            <Link to={`posts/${post.id}`} state={{ post: post }}>
              Visit Post
            </Link>
          </div>
        );
      }));
  }
  return (
    <div>
      <div>
        <PostForm />
      </div>
      <div>{postsList}</div>
    </div>
  );
};

export default PostIndexContainer;
