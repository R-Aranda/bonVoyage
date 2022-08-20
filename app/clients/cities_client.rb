class CitiesClient

  def self.request_cities(country)
    headers = {
      "X-CSCAPI-KEY": ENV['CSC_API_KEY']
    }
    url = "https://api.countrystatecity.in/v1/countries/#{country}"
    @response = HTTParty.get(url, headers: headers)
    cities = JSON.parse(@response.body)
  end
end

