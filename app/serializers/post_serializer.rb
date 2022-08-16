class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :country_id, :created_at, :comments, :user, :user_id
  
  belongs_to :country
  has_many :comments
end
