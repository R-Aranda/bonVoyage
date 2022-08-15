import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import CommentForm from "../Comment/CommentForm";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../redux/actions/commentActions";
import { setPost } from "../redux/actions/postActions";
import CommentsList from "./CommentsList";

const PostShowContainer = () => {
  const post = useSelector((state) => state.post.post);
  const comments = useSelector((state) => state.comment.comments);
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
