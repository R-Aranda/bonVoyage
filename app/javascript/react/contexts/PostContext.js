import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/post";

const Context = React.createContext();

export const usePost = () => {
  return useContext(Context);
};

export const PostProvider = ({ children }) => {
  const id = useParams();
  const { loading, error, value: post } = useAsync(() => getPost(id.id), [id]);

  return (
    <Context.Provider
      value={{
        post: { id, ...post },
      }}
    >
      {loading ? <h1>Loading</h1> : error ? <h1>{error}</h1> : children}
    </Context.Provider>
  );
};
