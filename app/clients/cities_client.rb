class CitiesClient

  def self.request_cities(city)
    headers = {
      "apikey": ENV['GEOGRAPHY_API_KEY']
    }
    url = "https://api.apilayer.com/geo/city/name/#{city}"
    binding.pry
    @response = HTTParty.get(url, headers: headers)
    cities = JSON.parse(@response.body)
  end
end
