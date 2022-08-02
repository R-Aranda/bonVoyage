class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :posts
  has_many :posts
end
