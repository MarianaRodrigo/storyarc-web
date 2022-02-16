import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Search = () => (
  <div className="text-sm border rounded border-gray-200 mt-6 ml-3 p-2 pl-2 sm:w-80 md:w-60">  
    <GooglePlacesAutocomplete 
      apiKey="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMY8_V3zDNFubRe3vjsiiduWIhLk4oUrg&libraries=places"
      apiOptions={{ language: 'pt', region: 'pt' }}
    />
  </div>
);

export default Search;