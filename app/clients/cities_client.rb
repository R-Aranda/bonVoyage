class CitiesClient

  def self.request_cities(city)
    headers = {
      "X-CSCAPI-KEY": ENV['CSC_API_KEY']
    }
    url = "https://api.apilayer.com/geo/city/name/#{city}"
    @response = HTTParty.get(url, headers: headers)
    cities = JSON.parse(@response.body)
  end
end

