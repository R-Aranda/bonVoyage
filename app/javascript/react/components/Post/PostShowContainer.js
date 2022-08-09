import React, { useState, useEffect, Fragment } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import CommentForm from "./CommentForm";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../redux/actions/commentActions";
import { setPost } from "../redux/actions/postActions";

const PostShowContainer = () => {
  const dispatch = useDispatch();
  const currentPost = useLocation();
  dispatch(setPost(currentPost.state.post));
  const post = useSelector((state) => state.post.post);
  dispatch(setComments(post.comments));
  const comments = useSelector((state) => state.comments.comments);

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
        <div>
          <h1>{post.country.name}</h1>
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
      </div>
    </Fragment>
  );
};

export default PostShowContainer;
