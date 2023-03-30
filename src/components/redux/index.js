import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./weather-api";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefauldMiddleware) =>
    getDefauldMiddleware().concat(weatherApi.middleware),
});
