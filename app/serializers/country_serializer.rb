class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :posts
  has_many :posts

  def countries_list
    Country.all()
  end
end
