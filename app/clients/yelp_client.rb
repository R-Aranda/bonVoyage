require "uri"
require "net/http"

class YelpClient
  
  def self.find(city)
    headers = {
      "Authorization": ENV['YELP_API_KEY']
    }
    url = Addressable::URI.parse("https://api.yelp.com/v3/businesses/search?location=#{city}").display_uri.to_s

    # https = Net::HTTP.new(url.host, url.port)
    # https.use_ssl = true
    # params = {

    # }
    # request = Net::HTTP::Get.new(url)
    # request["Authorization"] = ENV['YELP_API_KEY']

    # response = https.request(request)
    response = HTTParty.get(url, headers: headers)

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

