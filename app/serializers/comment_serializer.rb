class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :post_id, :created_at

  belongs_to :post
end
