class Api::V1::CountriesController < ApiController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :authorize_user, except: [:index, :show]

  def index
    render json: Country.all
  end

  def show
    country = Country.find_by(slug: params[:slug])
    # country["photo"] = photo(country.name)
    render json: country, include: ['posts', 'posts.comments']
  end

  def create 
    country = Country.new(country_params)

    if country.save 
      render json: country
    else 
      render json: { error: country.errors.full_messages }, status: "400"
    end
  end

  private

  def country_params
    params.permit(:name)
  end

  def photo(country)
    GooglePlaceClient.google_photo(country)
  end

  # def authorize_user
  #   if !user_signed_in? || !current_user.admin?
  #     rails ActionController::RoutingError.new("Not Found")
  #     flash[:notice] = "You do not have access to this page"
  #   end
  # end
end