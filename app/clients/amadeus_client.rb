require 'amadeus'

class AmadeusClient
  
  def self.points_of_interest(latitude, longitude)
    amadeus = Amadeus::Client.new()
    response_array = amadeus.reference_data.locations.points_of_interest.get(latitude: latitude.to_f, longitude: longitude.to_f)

    places_array = []
    response_array.data.each do |place|
      places_array << {
        name: place["name"],
        category: place["category"],
        geocode: place["geocode"],
        tags: place["tags"],
        rank: place["rank"]
      }
    end
    places_array
    binding.pry
  end

  private

  
end