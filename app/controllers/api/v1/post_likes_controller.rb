class Api::V1::PostLikesController < ApiController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user

  def create
    prev_like = PostLike.find_by(user_id: current_user.id, post_id: params[:post_id])

    if prev_like
      prev_like.destroy
      liked = false
      render json: { liked: liked, likeCount: post.post_likes.length }
    else
      liked = post.post_likes.new(post_like_params)
      liked.user = current_user

      if liked.save
        render json: { liked: liked, likeCount: post.post_likes.length }
      else
        render json: { error: post.errors.full_messages, status: 400 }
      end
    end
  end

  private

  def post
    @post ||= Post.find(params[:post_id])
  end

  def post_like_params
    params.require(:post_like).permit(:liked, :post_id, :user_id)
  end

  def authenticate_user
    render json: { error: 'You must be signed in to do that!', status: 401 } unless user_signed_in?
  end
end
