class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :posts
  has_many :posts
end
