import React, { Fragment } from "react";
import MapContainer from "../Map/MapContainer";
import SearchComponent from "../Search/SearchComponent";
import { getAllPosts } from "../../services/post";
import { useAsync } from "../../hooks/useAsync";
import LandingHeader from "./LandingHeader";
import LandingPagePost from "./LandingPagePost";

const LandingPage = () => {
  const { loading, error, value: posts } = useAsync(getAllPosts);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  const postList = posts.map((post) => {
    return (
      <div key={post.id}>
        <LandingPagePost key={post.id} post={post} />
      </div>
    );
  });

  return (
    <Fragment>
      <LandingHeader />
      <div className="grid-x">
        <MapContainer />
        <div className="cell small-12 medium-6 large-7">
          <h3 className="latest-posts-header">Latest Posts</h3>
          {postList}
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
