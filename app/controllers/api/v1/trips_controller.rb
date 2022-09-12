class Api::V1::TripsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def show
    render json: Trip.find_by(id: params[:id])
  end

  def create 

    trip = TripValidator.trip(params, current_user)
    binding.pry
    # render json: {response: trip, status: "all good"}
  end

  private

  def trip_params 
    params.require(:trip).permit(:trip_name)
    
    # update params to include nested destinatonis
  end

  def dest_params
    params.permit(:city_id, :user_id, :trip_id)
  end

  
end