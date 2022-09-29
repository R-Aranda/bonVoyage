class Api::V1::UsersController < ApiController
  def show
    render json: current_user
  end
end
