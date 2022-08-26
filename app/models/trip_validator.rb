class TripValidator
  
  def self.trip(params, current_user)
    Trip.transaction do
      trip = Trip.new(trip_name: params[:trip_name])
      trip.user = current_user
      trip.save!
      destinations = params[:destinations]
      dest_array = []
      errors = false
      Destination.transaction do
        destinations.each do |dest| 
          
          city_params = {name: dest[:city], country_id: 0}
          city = get_city_data(dest[:city], dest[:country]["value"], current_user, city_params)

          if city[:error]
            errors = true
            dest_array << city
       
          else
            destination = Destination.new(trip_id: trip.id, city_id: city.id)
            destination.user = current_user
            destination.save!
            dest_array << destination
          end
        end
      end

      {trip: trip, destination: dest_array, errors: errors}
    end
  end
  def self.get_city_data(city, country_id, current_user, city_params)
      city_data = CitiesClient.request_cities(city)
      country = Country.find_by(id: country_id)
      city = CitiesClient.get_data(city_data, country.name, city)
      city_params[:country_id] = country.id
      verified_city = CitiesClient.verify_city(city, city_params, current_user, [city])
  end

  
end