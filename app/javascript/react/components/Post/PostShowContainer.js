import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import CommentForm from "./CommentForm";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../redux/actions/commentActions";
import { setPost } from "../redux/actions/postActions";

const PostShowContainer = () => {
  const post = useSelector((state) => state.post.post);
  const comments = useSelector((state) => state.comment.comments);
  const country = useSelector((state) => state.country.country);

  const commentsList = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <p>{comment.body}</p>
        <p>{moment(comment.created_at).format("LL")}</p>
      </li>
    );
  });

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
      <div>
        <h4>Comments:</h4>
        <CommentForm post_id={post.id} comments={post.comments} />
      </div>
      <ul>{commentsList}</ul>
    </Fragment>
  );
};

export default PostShowContainer;
