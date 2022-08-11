# frozen_string_literal: true

class GooglePlaceClient
  def self.find(name, options = {})
    new(options).find(name)
  end

  def initialize(options = {})
    @options = options
  end

  def find(name)
    list = client.spots_by_query("#{name} office", options)
    place = list.find { |item| item.permanently_closed.nil? && item.types.include?('establishment') }
    return nil unless place

    client.spot(place.place_id)
  end

  private

  attr_reader :options

  def client
    @client ||= GooglePlaces::Client.new(api_key)
  end

  def api_key
    ENV['GOOGLE_API_KEY']
  end
end