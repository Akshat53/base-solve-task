import { configureStore } from "@reduxjs/toolkit";
import locationStore from "./locationStore";

const store = configureStore({
  reducer: {
    locationStore: locationStore,
  },
});

export default store;
