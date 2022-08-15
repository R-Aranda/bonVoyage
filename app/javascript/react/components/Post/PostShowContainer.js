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
        <p>{moment(post?.created_at).format("LL")}</p>
      </div>
      <CommentsList comments={post.comments} post={post} />
    </Fragment>
  );
};

export default PostShowContainer;
