class Api::V1::TripsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def show
    render json: Trip.find_by(id: params[:id])
  end

  def create
    return render json: { errors: 'Please add a Trip Name' } if params[:trip_name] === {}

    trip = TripValidator.trip(params, current_user)
    return render json: { errors: 'Please add a valid Departing City' } if trip[:destination].length === 0

    render json: { response: trip, status: 200 }
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
