import { createSlice } from "@reduxjs/toolkit";

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    workouts: [],
    currentWorkout: null,
  },
  reducers: {
    addWorkout: (state, action) => {
      const { workout } = action.payload;
      state.workouts.push(workout);
    },
    setCurrentWorkout: (state, action) => {
      const { workout } = action.payload;
      state.currentWorkout = workout;
    },
    updateCurrentWorkout: (state, action) => {
      const { workout } = action.payload;
      state.currentWorkout = { ...state.currentWorkout, ...workout };
    },
    clearCurrentWorkout: (state) => {
      state.currentWorkout = null;
    },
  },
});

export const {
  addWorkout,
  setCurrentWorkout,
  updateCurrentWorkout,
  clearCurrentWorkout,
} = workoutsSlice.actions;

export const selectWorkouts = (state) => state.workouts.workouts;
export const selectCurrentWorkout = (state) => state.workouts.currentWorkout;

export default workoutsSlice.reducer;
