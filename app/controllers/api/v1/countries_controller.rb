class Api::V1::CountriesController < ApiController
  before_action :authenticate_user!, except: %i[index show]
  before_action :authorize_user, except: %i[index show]

  def index
    render json: Country.order('RANDOM()').limit(10)
  end

  def show
    country = Country.find_by(slug: params[:slug].downcase)
    yelp_data = YelpClient.find(country.name)
    country.photo = unsplash(country.name)
    country.yelp = yelp_data
    render json: country, include: ['posts', 'posts.comments']
  end

  def create
    country = Country.new(country_params)

    if country.save
      render json: country
    else
      render json: { error: country.errors.full_messages }, status: '400'
    end
  end

  private

  def country_params
    params.permit(:name)
  end

  def unsplash(city)
    search_results = Unsplash::Photo.search(city)

    img = search_results[0].urls.regular
    artist_name = search_results[0].user.name
    artist_url = search_results[0].links.html
    unsplash_url = 'https://unsplash.com/?utm_source=ruperts_travel_app&utm_medium=referral'

    photo = {
      photo: img,
      artist_name: artist_name,
      artist_url: artist_url,
      unsplash_url: unsplash_url
    }
  end

  # def authorize_user
  #   if !user_signed_in? || !current_user.admin?
  #     rails ActionController::RoutingError.new("Not Found")
  #     flash[:notice] = "You do not have access to this page"
  #   end
  # end
end
