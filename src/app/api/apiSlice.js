import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//change url when deploy
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes: ["User", "Exercises", "Workouts", "Activities"],
  endpoints: (builder) => ({}),
});
