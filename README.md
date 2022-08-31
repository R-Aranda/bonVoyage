# bonVoyage

(This was completed as a capstone project while at Launch Academy)

bonVoyage is a traveler’s social media platform where users can connect with one another and plan their next trip by discovering new destinations. On the landing page, a user is able to utilize an interactive world map which redirects them to the selected country's show page where they can post questions about a planned upcoming trip. Information about popular cities with suggested destinations and forms to search for flights and hotels can be found across the site. bonVoyage is a perfect resource for any individual looking for information on their next travel destination.

---
## Getting Started

In one terminal instance, run: 

```
$ bundle install
$ bundle exec rake:db create
$ bundle exec rake:db migrate
$ bundle exec rake:db seed
$ rails server
```

In another terminal instance, run:

```
$ yarn install
$ yarn start
```
---
## Built With

- [Ruby on Rails](https://rubyonrails.org/)
- [React.js](https://reactjs.org/)

#### Third Party APIs
- [Yelp Fusion API](https://fusion.yelp.com/)
- [Rest Countries API](https://restcountries.com/)
- [Unsplash API](https://unsplash.com/developers)
- [OpenWeather API](https://openweathermap.org/api)
- [APILayer Geography API](https://apilayer.com/marketplace/geo-api)
- [Amadeus API](https://developers.amadeus.com/)
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service)

#### React Libraries
- [axios](https://yarnpkg.com/package/axios)
- [Moment.js](https://yarnpkg.com/package/moment)
- [react-final-form](https://yarnpkg.com/package/react-final-form)
- [react-slugify](https://yarnpkg.com/package/react-slugify)
- [react-tooltip](https://yarnpkg.com/package/react-tooltip)
- [react-simple-maps](https://yarnpkg.com/package/react-simple-maps)
- [react-router-dom](https://yarnpkg.com/package/react-router-dom)
- [font-awesome](https://yarnpkg.com/package/font-awesome)

#### Ruby Gems
- [devise](https://rubygems.org/gems/devise)
- [foundation-rails](https://rubygems.org/gems/foundation-rails)
- [google_places](https://rubygems.org/gems/google_places)
- [httparty](https://rubygems.org/gems/httparty)
- [unsplash](https://rubygems.org/gems/unsplash)
- [amadeus](https://rubygems.org/gems/amadeus)
- [uri](https://rubygems.org/gems/uri)
- [net-http](https://rubygems.org/gems/net-http)
- [http](https://rubygems.org/gems/http)

---
## Future (Dream) Features
- Create an itinerary planner tool using Amadeus API and Google Places API. A user will be able to create a trip and select specific destinations using a dynamic form. Suggested flights and hotels will be generated for each destination the user specifies and saved to the user's profile. 
- Add more functionality to the forum section including nested comments and notifications for when users reply to posts and comments.