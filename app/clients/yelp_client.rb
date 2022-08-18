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
    @data = JSON.parse(response.body)
    place_data = []
    @data["businesses"].each do |bus|
      place_data << {
        name: bus["name"],
        image: bus["image_url"],
        url: bus["url"],
        categories: bus["categories"],
        location: bus["location"]["city"],
        rating: bus["rating"]
      }
    end
    return place_data
  end
end