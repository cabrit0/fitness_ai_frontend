import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/auth/loginSlice";
import exercisesReducer from "../features/exercises/exercisesSlice";
import WorkoutsSlice from "../features/workouts/WorkoutsSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    exercises: exercisesReducer,
    workouts: WorkoutsSlice,
  },
});

export default store;
