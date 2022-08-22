class Api::V1::CitiesController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def index
    
    # country = Country.find(params[:country_id])
    city = CitiesClient.request_cities("ESP")
    binding.pry
    render json: city
  end

  def create 
    cities = CitiesClient.request_cities("Barcelona")
    binding.pry
    render json: cities
    
  end

  # private

  # def country_params
  #   params.permit(:name)
  # end

  # def authorize_user
  #   if !user_signed_in? || !current_user.admin?
  #     rails ActionController::RoutingError.new("Not Found")
  #     flash[:notice] = "You do not have access to this page"
  #   end
  # end
end