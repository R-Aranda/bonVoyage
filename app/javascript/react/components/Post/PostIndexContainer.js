import React, { Fragment } from "react";
import PostForm from "./PostForm";
import { useCountry } from "../../contexts/CountryContext";
import PostItem from "./PostItem";

const PostIndexContainer = () => {
  const { posts, currentUser } = useCountry();
  const postsList = posts.map((post) => {
    return <PostItem key={post.id} post={post} currentUser={currentUser} />;
  });

  return (
    <Fragment>
      <div>
        <PostForm />
      </div>
      {postsList}
    </Fragment>
  );
};

export default PostIndexContainer;
