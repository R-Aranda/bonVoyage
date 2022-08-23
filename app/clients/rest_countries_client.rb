class RestCountriesClient

  def self.request_world_countries
    url = "https://restcountries.com/v3.1/all"
    @response = HttParty.get(url)
  end

  def self.parse_data
    countries = JSON.parse(@response.body)
  end
end

