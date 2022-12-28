import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/auth/loginSlice";
import exercisesReducer from "../features/exercises/exercisesSlice";
import workoutsSlice from "../features/workouts/WorkoutsSlice";
import pagesSlice from "../pages/pagesSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    exercises: exercisesReducer,
    workouts: workoutsSlice,
    pages: pagesSlice,
  },
});

export default store;
