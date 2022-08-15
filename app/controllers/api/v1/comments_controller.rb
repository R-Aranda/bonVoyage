class Api::V1::CommentsController < ApiController
  # before_action :authorize_user, except: [:index, :show]

  def index
    comments = Comment.all
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment
  end

  def create
    comment = post.comments.new(comment_params)
    
    if comment.save 
      render json: comment
      
    else 
      render json: { error: comment.errors.messages }, status: "400"
      
    end
  end

  def comment_params
    params.permit(:body, :likes, :dislikes, :commentable_id, :commentable_type)
  end

  def post
    @post ||= Post.find(params[:post_id])
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      render json: {error: ["Only admins have access to this feature"]}
    end
  end

  
end