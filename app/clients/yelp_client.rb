require "uri"
require "net/http"

class YelpClient
  
  def self.find(country)
    url = URI("https://api.yelp.com/v3/businesses/search?location=#{country}")

    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true

    request = Net::HTTP::Get.new(url)
    request["Authorization"] = ENV['YELP_API_KEY']

    response = https.request(request)

    data_array = JSON.parse(response.body)

    if data_array["error"]
      return []
    elsif data_array["businesses"].length > 0
      data = data_array["businesses"]
      place_data = []
      10.times do |i|
        place_data << {
          name: data[i]["name"],
          image: data[i]["image_url"],
          url: data[i]["url"],
          categories: data[i]["categories"],
          location: data[i]["location"]["city"],
          rating: data[i]["rating"]
        }
      end
    end
    return place_data
  end
end