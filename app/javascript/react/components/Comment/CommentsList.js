import React from "react";
import CommentForm from "./CommentForm";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faHeart, faReply } from "@fortawesome/free-solid-svg-icons";
import { usePost } from "../../contexts/PostContext";
import CommentItem from "./CommentItem";

library.add(faEdit, faHeart, faReply);

const CommentsList = () => {
  const { post, comments, currentUser } = usePost();

  const commentsList = comments.map((comment) => {
    return (
      <CommentItem
        key={comment.id}
        comment={comment}
        currentUser={currentUser}
      />
    );
  });

  return (
    <div>
      <div className="header">
        <h4>Comments:</h4>
      </div>
      <CommentForm postId={post?.id} comments={post?.comments} />

      <div className="comments-list">{commentsList}</div>
    </div>
  );
};

export default CommentsList;
