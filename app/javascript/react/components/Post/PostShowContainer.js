import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import moment from "moment";
import CommentForm from "./CommentForm";

const PostShowContainer = (props) => {
  let postId = props.match.params.id;
  const [post, setPost] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState({});

  let commentsList;
  if (loaded) {
    commentsList = post.comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.body}</p>
          <p>{moment(comment.created_at).format("LL")}</p>
        </li>
      );
    });
  }

  const handleChange = (event) => {
    setCommentInput({
      ...commentInput,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const post_id = parseInt(post.id);
    commentInput["post_id"] = post_id;
    axios.post("/api/v1/comments", { ...commentInput }).then((resp) => {
      setComments(comments.concat(resp.data));
      setCommentInput({
        body: "",
      }).catch((resp) => {
        console.log(resp.message);
      });
    });
  };

  return (
    <Fragment>
      {loaded && (
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
            <CommentForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              commentInput={commentInput}
            />
          </div>
          <ul>{commentsList}</ul>
        </div>
      )}
    </Fragment>
  );
};

export default PostShowContainer;
