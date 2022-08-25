class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :city_id, :city, :user_id, :city_data

  def city_data
    response = GooglePlaceClient.find(object.city.name)
  end
end