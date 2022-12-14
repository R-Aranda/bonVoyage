require 'uri'

class CitiesClient

  def self.request_cities(city)
    headers = {
      "apikey": ENV['GEOGRAPHY_API_KEY']
    }
    url = Addressable::URI.parse("https://api.apilayer.com/geo/city/name/#{city}").display_uri.to_s
    @response = HTTParty.get(url, headers: headers)
    cities = JSON.parse(@response.body)
  end

  def self.get_data(data, country, name)
    if data.to_a[0].include?("No city found")
      return ["No City Found"]
    else 
      data.each do |city|
        if city["country"]["name"].include?(country) && city["name"] = name
          return city
        end
      end
      return ["No City Found"]
    end
  end

  def self.verify_city(city, city_params, current_user, input)
    if city[0] === "No City Found"
      return {error: "That city was not found", status: 400, input: input}
    elsif 
      City.exists?(name: city_params[:name])
      return City.find_by(name: city_params[:name])
    else
      new_city = City.new(city_params)
      new_city.user = current_user
      if new_city.save
        new_city[:lon] = city["longitude"]
        new_city[:lat] = city["latitude"]
        new_city[:geo_id] = city["geo_id"]
        new_city.name = new_city.name.capitalize
        new_city.save
        new_city.user = current_user
        return new_city
      else
        return { error: new_city.errors.full_messages, status: 400 }
      end
    end
  end
end

