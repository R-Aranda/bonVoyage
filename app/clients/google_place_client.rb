# frozen_string_literal: true

class GooglePlaceClient
  def self.find(name, options = {})
    new(options).find(name)
  end

  def initialize(options = {})
    @options = options
  end

  def find(name)
    list = client.spots_by_query(name)
    @place = list[0]
    return @place

    client.spot(place.place_id)
  end

  def self.google_photo(country)
    country = find(country)
    binding.pry
    photo = country.photos[0].fetch_url(400)
    return photo
  end

  attr_reader :options

  private

  def client
    @client ||= GooglePlaces::Client.new(api_key)
  end

  def api_key
    ENV['GOOGLE_API_KEY']
  end
end