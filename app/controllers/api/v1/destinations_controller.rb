class Api::V1::DestinationsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def create 
    destination = Destination.new()
    destination.user = current_user
    destination.city = City.find_by(name: params[:city_id])
    destination.trip = Trip.find(params[:trip_id])
    
    if destination.save 
      render json: destination
    else 
      render json: { error: destination.errors.full_messages, status: 400 }
    end
  end

  private

  def destination_params 
    params.require(:destination).permit(:name)
  end
end