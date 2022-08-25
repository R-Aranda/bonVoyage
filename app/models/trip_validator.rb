class TripValidator
  
  def self.trip(params, current_user)
    ActiveRecord::Base.transaction do
      trip = Trip.new(trip_name: params[:trip_name])
      trip.user = current_user
      trip.save!
   
      city = City.find_by(name: params[:destinations][0][:city])
      dest = Destination.new()
      dest.user = current_user
      dest.trip = trip
      dest.city = city
      dest.save!
      binding.pry
    
      return {trip: trip, dest: dest}
    end
  end
end