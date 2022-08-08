class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :created_at

  belongs_to :post
end
