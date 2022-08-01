class Api::V1::PostsController < ApiController
  def index
    posts = Post.all 
    render json: posts
  end

  def show
    # render json: post
  end

  def create 
    
    post = Post.new(post_params)
    country = Country.find(params[:country_id])
    post.country = country

    if post.save 
      render json: post
      
    else 
      render json: { error: post.errors.full_messages }, status: "400"
      
    end
  end

  def post_params 
    params.permit(:title, :body)
  end
end