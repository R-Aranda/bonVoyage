class CommentLikeSerializer < ActiveModel::Serializer
  attributes :user_id, :comment_id, :liked
end