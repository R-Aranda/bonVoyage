class WeatherClient
  def self.get_weather(city)
    url = Addressable::URI.parse("http://api.openweathermap.org/data/2.5/weather?q=#{city}&units=imperial&appid=#{ENV["OPEN_WEATHER_API_KEY"]}").display_uri.to_s

    response = HTTParty.get(url)
    
    weather_data = JSON.parse(response.body)
    data = {
      temp: weather_data["main"]["temp"],
      feelsLike: weather_data["main"]["feels_like"],
      min: weather_data["main"]["temp_min"],
      max: weather_data["main"]["temp_max"],
      humidity: weather_data["main"]["humidity"]
    }
  end
end