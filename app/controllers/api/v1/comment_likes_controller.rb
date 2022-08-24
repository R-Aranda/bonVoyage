class Api::V1::CommentLikesController < ApiController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user

  def create
    prev_like = CommentLike.find_by(user_id: current_user.id, comment_id: params[:comment_id], liked: params[:liked])
    if prev_like
      prev_like.destroy
      liked = false
      render json: {liked: liked, likeCount: comment.comment_likes.length}
    else
      liked = comment.comment_likes.new(comment_like_params)
      liked.user = current_user
      
      if liked.save
        render json: {liked: liked, likeCount: comment.comment_likes.length}
      else
        render json: { error: comment.errors.full_messages, status: 400 }
      end
    end
  end

  

  private

  def comment
    @comment ||= Comment.find(params[:comment_id])
  end

  def comment_like_params
    params.require(:comment_like).permit(:liked, :comment_id, :user_id)
  end

  def authenticate_user
    if !user_signed_in?
      render json: { error: "You must be signed in to do that!", status: 401 }
    end
  end
end