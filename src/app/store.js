import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/auth/loginSlice";
import exercisesReducer from "../features/exercises/exercisesSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    exercises: exercisesReducer,
  },
});

export default store;
