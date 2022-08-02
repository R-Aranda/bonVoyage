class Api::V1::PostsController < ApiController
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
end