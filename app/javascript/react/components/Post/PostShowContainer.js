import React, { Fragment } from "react";
import moment from "moment";
import CommentsList from "../Comment/CommentsList";
import { usePost } from "../../contexts/PostContext";

const PostShowContainer = () => {
  const { post } = usePost();

  return (
    <Fragment>
      <h1>{post?.country.name}</h1>
      <div>
        <h2>{post?.title}</h2>
        <article>{post?.body}</article>
        <div>
          Posted by: {post.user.username}{" "}
          {moment(post?.created_at)
            .local()
            .startOf("seconds")
            .fromNow()}
        </div>
      </div>
      <CommentsList comments={post.comments} post={post} />
    </Fragment>
  );
};

export default PostShowContainer;
