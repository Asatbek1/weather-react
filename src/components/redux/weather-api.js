
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),

  endpoints: (build) => ({
    getWeather: build.query({
      query: (cityName) =>
        `/weather?q=${cityName}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`,
    }),
  }),
});
export const { useGetWeatherQuery } = weatherApi;
