class Api::V1::CommentsController < ApiController
  before_action :authorize_user, except: [:index, :show]

  def index
    comments = Comment.all
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment
  end

  def create
    comment = Comment.new(comment_params)
    post = Post.find(params[:post_id])
    comment.post = post

    if comment.save 
      render json: comment
      
    else 
      render json: { error: comment.errors.full_messages }, status: "400"
      
    end
  end

  def comment_params
    params.permit(:body)
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      rails ActionController::RoutingError.new("Not Found")
      flash[:notice] = "You do not have access to this page"
    end
  end
end