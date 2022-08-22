class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :lon, :lat, :geo_id, :country_id, :slug, :user, :user_id, :yelp
  
end