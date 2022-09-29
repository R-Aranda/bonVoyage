class Api::V1::CommentsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user

  def create
    comment = post.comments.new(comment_params)
    comment.user = current_user
    if comment.save
      render json: comment
    else
      render json: { error: comment.errors.full_messages, status: 400 }
    end
  end

  def destroy
    comment = Comment.find(params[:id])

    if comment.destroy
      render json: { commentId: comment.id, status: 204 }
    else
      render json: { error: 'Unable to delete comment', status: :not_implemented }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

  def post
    @post ||= Post.find(params[:post_id])
  end

  def authenticate_user
    render json: { error: 'You must be signed in', status: 401 } unless user_signed_in?
  end
end
