// import React, { useState, useEffect } from "react";
// import { TextField } from "@mui/material";
// import { Loader } from "@googlemaps/js-api-loader";

// const LocationSearchBox = ({ onPlaceSelect }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [predictions, setPredictions] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);

//     if (event.target.value) {
//       setIsLoading(true);
//       const loader = new Loader({
//         apiKey: "AIzaSyCfPvNGtHERyFwnImyi4B47HtOGPW56Pvk",
//         version: "weekly",
//       });

//       loader.load().then(() => {
//         const service = new google.maps.places.AutocompleteService();
//         service.getPlacePredictions(
//           { input: event.target.value, types: ["(cities)"] },
//           (predictions, status) => {
//             if (status === google.maps.places.PlacesServiceStatus.OK) {
//               setPredictions(predictions);
//             } else {
//               setPredictions([]);
//             }
//             setIsLoading(false);
//           }
//         );
//       });
//     } else {
//       setPredictions([]);
//     }
//   };

//   const handlePlaceSelect = (placeId) => {
//     const service = new google.maps.places.PlacesService(
//       document.createElement("div")
//     );
//     service.getDetails({ placeId }, (place, status) => {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         onPlaceSelect({
//           name: place.name,
//           address: place.formatted_address,
//           latitude: place.geometry.location.lat(),
//           longitude: place.geometry.location.lng(),
//         });
//         setInputValue(place.name);
//         setPredictions([]);
//       }
//     });
//   };

//   useEffect(() => {
//     const initializeAutocomplete = () => {
//       const input = document.getElementById("location");
//       const autocomplete = new google.maps.places.Autocomplete(input);
//       autocomplete.setFields(["address_components", "geometry", "name"]);
//       autocomplete.addListener("place_changed", onPlaceChanged);
//     };

//     const onPlaceChanged = () => {
//       // Handle the selected place here
//     };

//     initializeAutocomplete();
// });

//   return (
//     <div>
//       <TextField
//         label="Location"
//         variant="outlined"
//         value={inputValue}
//         onChange={handleInputChange}
//         fullWidth
//       />
//       {isLoading && <div>Loading...</div>}
//       {predictions.length > 0 && (
//         <ul>
//           {predictions.map((prediction) => (
//             <li
//               key={prediction.place_id}
//               onClick={() => handlePlaceSelect(prediction.place_id)}
//             >
//               {prediction.description}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default LocationSearchBox;
