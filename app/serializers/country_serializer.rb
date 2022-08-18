class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :posts, :photo, :current_user
  has_many :posts

  def countries_list
    Country.all()
  end
end
