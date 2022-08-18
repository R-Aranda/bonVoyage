class Api::V1::PostsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user, except: [:show]

  def show
    render json: Post.find_by(id: params[:id]) 
  end

  def create 
    post = country.posts.new(post_params)
    post.user = current_user
    
    if post.save 
      render json: post
    else 
      render json: { error: post.errors.full_messages, status: 400 }
    end
  end

  def destroy
    post = Post.find(id: params[:id])

    if post.destroy
      render json: {status: 200}
    else
      render json: { error: "Unable to delete post", status: :not_implemented }
    end
  end

  private

  def post_params 
    params.require(:post).permit(:title, :body, :post_likes)
  end

  def country
    @country ||= Country.find(params[:country_id])
  end

  def authenticate_user
    if !user_signed_in?
      render json: { error: "You must be signed in to do that!", status: 401 }
    end
  end
end