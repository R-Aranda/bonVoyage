import React, { Fragment } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import CommentsList from "../Comment/CommentsList";

const PostShowContainer = () => {
  const post = useSelector((state) => state.post.post);
  const country = useSelector((state) => state.country.country);

  return (
    <Fragment>
      <div>
        <h1>{country.name}</h1>
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{moment(post.created_at).format("LL")}</p>
        </div>
      </div>
      <CommentsList />
    </Fragment>
  );
};

export default PostShowContainer;
