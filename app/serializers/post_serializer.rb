class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :country_id, :created_at, :comments, :user, :user_id, :post_likes, :current_user
  
  belongs_to :country
  has_many :comments
  has_many :post_likes
end
