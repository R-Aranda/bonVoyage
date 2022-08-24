class Api::V1::TripsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def show
    render json: Trip.find_by(id: params[:id])
  end

  def create 
    trip = Trip.new(trip_params)
    trip.user = current_user
    
    if trip.save 
      render json: {trip: trip, status: 201}
    else 
      render json: { error: trip.errors.full_messages, status: 400 }
    end
  end

  private

  def trip_params 
    params.require(:trip).permit(:trip_name)
  end
end