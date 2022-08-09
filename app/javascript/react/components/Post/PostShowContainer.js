import React, { useState, useEffect, Fragment } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import CommentForm from "./CommentForm";

const PostShowContainer = () => {
  const post = useLocation();
  const post_id = post.state.post.id;

  const [commentInput, setCommentInput] = useState({});
  // debugger;

  const commentsList = post.state.post.comments.map((comment) => {
    // debugger;
    return (
      <li key={comment.id}>
        <p>{comment.body}</p>
        <p>{moment(comment.created_at).format("LL")}</p>
      </li>
    );
  });

  const handleChange = (event) => {
    setCommentInput({
      ...commentInput,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <Fragment>
      <div>
        <div>
          <h1>{post.state.post.country.name}</h1>
          <div>
            <h2>{post.state.post.title}</h2>
            <p>{post.state.post.body}</p>
            <p>{moment(post.state.post.created_at).format("LL")}</p>
          </div>
        </div>
        <div>
          <h4>Comments:</h4>
          <CommentForm post_id={post_id} comments={post.state.post.comments} />
        </div>
        <ul>{commentsList}</ul>
      </div>
    </Fragment>
  );
};

export default PostShowContainer;
