import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import CommentsList from "../Comment/CommentsList";
import axios from "axios";

const PostShowContainer = () => {
  let { id } = useParams();
  const [post, setPost] = useState();
  const [country, setCountry] = useState();
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/v1/posts/${id}.json`)
      .then((resp) => {
        setPost(resp.data);
        setCountry(resp.data.country);
        setComments(resp.data.comments);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  return (
    <Fragment>
      {loaded && (
        <div>
          <h1>{country.name}</h1>
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>{moment(post.created_at).format("LL")}</p>
          </div>
          <CommentsList comments={comments} post={post} />
        </div>
      )}
    </Fragment>
  );
};

export default PostShowContainer;
