class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :posts, :photo
  has_many :posts

  def countries_list
    Country.all()
  end

  def photo
    GooglePlaceClient.google_photo(object.name)
  end
  
end
