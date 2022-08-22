class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :posts, :photo, :yelp, :current_user, :cities
  has_many :posts

  def countries_list
    Country.all()
  end
end
