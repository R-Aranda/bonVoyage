class Api::V1::CitiesController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user, except: [:show]

  def show
    city = City.find_by(slug: params[:id])
    
    yelp_data = YelpClient.find(city.name)
    city.yelp = yelp_data
    weather_data = WeatherClient.get_weather(city.name)
    city.weather = weather_data
    render json: city
  end

  def create
    city = get_city_data
    render json: city
  end

  private

  def city_params
    params.require(:city).permit(:name, :country_id)
  end

  def get_city_data
    city_data = CitiesClient.request_cities(params[:name])
    country = Country.find_by(id: params[:country_id])
    city = CitiesClient.get_data(city_data, country.name, params[:name])
    verified_city = CitiesClient.verify_city(city, city_params, current_user, [params[:name]])
  end

  def slugify(city)
    city.parameterize
  end

  def authenticate_user
    if !user_signed_in?
      render json: { error: "You must be signed in to do that!", status: 401 }
    end
  end
end