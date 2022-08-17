class GeographyClient

  def self.request_cities(country)
    headers = {
      "apikey": ENV['GEOGRAPHY_API_KEY']
    }
    url = "https://api.apilayer.com/geo/country/cities/#{country}"
    @response = HTTParty.get(url, headers: headers)
    cities = JSON.parse(@response.body)
  end
end