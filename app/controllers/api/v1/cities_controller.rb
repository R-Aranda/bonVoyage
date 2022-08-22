class Api::V1::CitiesController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def index
    
    # country = Country.find(params[:country_id])
    binding.pry
    city_data = CitiesClient.request_cities(city)
    binding.pry
    render json: city_data
  end

  def create
    city = City.new(city_params)
    city["country_id"] = 165
    binding.pry
    if city.save
      binding.pry
      render json: city
    else
      render json: { errors: city.errors.full_messages }, status: 400
    end
  end

  # private

  def city_params
    params.permit(:name, :country_id)
  end

  # def authorize_user
  #   if !user_signed_in? || !current_user.admin?
  #     rails ActionController::RoutingError.new("Not Found")
  #     flash[:notice] = "You do not have access to this page"
  #   end
  # end
end