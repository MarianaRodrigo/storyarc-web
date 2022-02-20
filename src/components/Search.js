import { useState } from "react";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export default function Search() {
  const [value, setValue] = useState(null);
  console.log(value);
  return (
    <div className="flex-grow h-14 border-[0.5px] rounded-lg shadow-md transition-transform">
      <div className="w-full h-full bg-white rounded-lg">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Pesquisar por locais"
          className="w-full h-full rounded-lg px-4 text-sm font-light tracking-wider outline-none"
        />
      </div>
    </div>
    // <div className="text-sm border rounded border-gray-200 mt-6 ml-3 p-2 pl-2 sm:w-80 md:w-60">
    //   <GooglePlacesAutocomplete
    //     selectProps={{
    //       value,
    //       onChange: setValue,
    //     }}
    //     apiKey="AIzaSyBMY8_V3zDNFubRe3vjsiiduWIhLk4oUrg"
    //     apiOptions={{ language: "pt", region: "pt" }}
    //     debounce={400}
    //     autocompletionRequest={{
    //       bounds: [
    //         { lat: 50, lng: 50 },
    //         { lat: 100, lng: 100 },
    //       ],
    //       componentRestrictions: {
    //         country: ["pt"],
    //       },
    //     }}
    //     minLengthAutocomplete={3}
    //   />
    // </div>
  );
}
