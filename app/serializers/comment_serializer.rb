class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :created_at, :post_id, :user, :user_id

  belongs_to :post
end
