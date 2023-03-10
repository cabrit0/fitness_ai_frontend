import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/auth/loginSlice";
import exercisesReducer from "../features/exercises/exercisesSlice";
import workoutsSlice from "../features/workouts/WorkoutsSlice";
import calendarSlice from "../features/calendar/calendarSlice";
import pagesSlice from "../pages/pagesSlice";
import userSettingsSlice from "../features/userSettings/userSettingsSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    exercises: exercisesReducer,
    workouts: workoutsSlice,
    calendar: calendarSlice,
    pages: pagesSlice,
    userSettings: userSettingsSlice,
  },
});

export default store;
