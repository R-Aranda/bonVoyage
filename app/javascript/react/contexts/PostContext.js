import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/post";

const Context = React.createContext();

export const usePost = () => {
  return useContext(Context);
};

export const PostProvider = ({ children }) => {
  const id = useParams();
  const { loading, error, value: post } = useAsync(() => getPost(id.id), [
    id.id,
  ]);
  const [comments, setComments] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (post?.comments == null) return;
    setComments(post.comments);
  }, [post?.comments]);

  const createLocalComment = (comment) => {
    if (comment.status === 401) {
      window.location.href = "/users/sign_in";
    } else if (comment.status === 400) {
      return setErrors(comment.error);
    }

    setComments((prevComments) => {
      return [comment, ...prevComments];
    });
  };

  return (
    <Context.Provider
      value={{
        post: { id, ...post },
        comments: comments,
        createLocalComment,
        errors: errors,
      }}
    >
      {loading ? <h1>Loading</h1> : error ? <h1>{error}</h1> : children}
    </Context.Provider>
  );
};
