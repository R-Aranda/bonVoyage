class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :created_at, :post_id

  belongs_to :post
end
