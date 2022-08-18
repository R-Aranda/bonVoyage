class PostLikeSerializer < ActiveModel::Serializer
  attributes :user_id, :post_id, :liked
end