class Api::V1::TripsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def show
    render json: Trip.find_by(id: params[:id])
  end

  def create 
    # binding.pry
    # TripsClient.trip(trip_params, dest_params, current_user, params)
    # ActiveRecord::Base.transaction do
    #   trip = Trip.new(trip_params)
    #   trip.user = current_user
    #   trip.save!
    #   Destinations.insert_all(params[:destinations])
    #   binding.pry
    trip = TripValidator.trip(params, current_user)
    binding.pry
    render json: {response: trip, status: "all good"}

    # ActiveRecord::Base.transaction do
    #   trip = Trip.new(trip_params)
    #   trip.user = current_user
    #   trip.save!
    #   binding.pry
    #   city = params
    #   dest = Destination.create!(dest_params)
    #   dest.user = current_user
    #   dest.trip = trip
    #   dest.save!
    #   binding.pry
      
  
    #   render json: {trip: trip, status: 201}
    # end
      

    #   render json: {trip: trip, status: 201}
    # end

    # ActiveRecord::Base.transaction do
    #   trip = Trip.new(trip_params)
    #   trip.user = current_user

    #   trip.save!

    #   trip.destinations.insert_all(trip_params.destinations)
    
    #   render json: {trip: trip, status: 201}
    # end

    # trip_name = params[:name]
    # destinations = params[:destinations]
    
    # destination = Destination.new()
    # destination.user = current_user
    # destination.city = City.find_by(name: params[:city_id])
    # destination.trip = Trip.find(params[:trip_id])
    
    # if destination.save 
    #   render json: destination
    # else 
    #   render json: { error: destination.errors.full_messages, status: 400 }
    # end
    #  define transaction block for creating trip and all destinations
    #  utilize your helper methods to validate the cities, etc as needed
    # may involve moving that logic to a PORO if not already so the functinality can be used in multi places
    

  # rescue error => error
  #   # binding.pry
  #   # may need to expand for additional error handling destinations
  #     render json: { error: trip.errors.full_messages, status: 400 }

  # end
    
    # if trip.save 
    #   render json: {trip: trip, status: 201}
    # else 
    #   render json: { error: trip.errors.full_messages, status: 400 }
    # end
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