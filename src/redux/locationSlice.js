import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Tirur",
  state: "Kerala",
  country: "India",
  "lat": 52.387783,
  "lon": 9.7334394,
  "timezone": "Asia/Kolkata"
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      const { city, state: locState, country, lat, lon, timezone } = action.payload;
    
      state.city = city;
      state.state = locState;
      state.country = country;
      state.lat = lat;
      state.lon = lon;
      state.timezone = timezone; // Ensure timezone is set
    
      // Save to local storage
      localStorage.setItem(
        "lanDetails",
        JSON.stringify({ city, state: locState, country, lat, lon, timezone }) // Include timezone here
      );
    },
    loadLocationFromStorage: (state) => {
      const savedLocation = JSON.parse(localStorage.getItem("lanDetails"));
      if (savedLocation) {
        state.city = savedLocation.city;
        state.state = savedLocation.state;
        state.country = savedLocation.country;
        state.lat = savedLocation.lat;
        state.lon = savedLocation.lon;
        state.timezone = savedLocation.timezone; // Make sure timezone is loaded
      }
    },    
  },
});

export const { setLocation, loadLocationFromStorage } = locationSlice.actions;

export default locationSlice.reducer;
