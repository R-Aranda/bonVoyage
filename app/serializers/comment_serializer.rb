class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :created_at, :post_id, :user, :user_id, :comment_likes

  belongs_to :post
  has_many :comment_likes
end
