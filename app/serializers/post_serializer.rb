class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :country_id, :created_at, :comments, :country
  
  belongs_to :country
  has_many :comments
end
