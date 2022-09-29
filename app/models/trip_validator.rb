class TripValidator
  
  def self.trip(params, current_user)
    Trip.transaction do
      trip = Trip.new(trip_name: params[:trip_name][:trip])
      trip.user = current_user
      trip.save!
      destinations = params[:destinations]
      dest_array = []
      errors = false
      Destination.transaction do
        destinations.each do |dest| 
          country = Country.find_by(name: dest[:country][:long_name])
          city_params = {name: dest[:city], country_id: country[:id]}
          city = get_city_data(dest[:city], country, current_user, city_params)
          if city[:error]
            errors = true
            dest_array << city
          else
            destination = Destination.new(trip_id: trip.id, city_id: city.id)
            destination.user = current_user
            destination.name = city.name
            destination.save!
            dest_array << destination
          end
        end
      end
      {trip: trip, destination: dest_array, errors: errors}
    end
  end
  
  def self.get_city_data(city, country, current_user, city_params)
      
      verified_city = CitiesClient.verify_city(city, city_params, current_user, [city])
  end
end