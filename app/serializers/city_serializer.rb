class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :country_id, :city_data

  def city_data
    binding.pry
    city = CitiesClient.request_cities(object.name)
    return city
  end
end