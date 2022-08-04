class Api::V1::PostsController < ApiController
  before_action :authorize_user, except: [:index, :show]

  def index
    posts = Post.all 
    render json: posts
  end

  def show
    post = Post.find_by(id: params[:id])  
    render json: post
  end

  def create 
    post = country.posts.new(post_params)
    
    if post.save 
      render json: post
      
    else 
      render json: { error: post.errors.messages }, status: "400"
      
    end
  end

  def post_params 
    params.permit(:title, :body)
  end

  def country
    @country ||= Country.find(params[:country_id])
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      render json: {error: ["Only admins have access to this feature"]}
    end
  end

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end
end