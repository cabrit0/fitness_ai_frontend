import { createSlice } from "@reduxjs/toolkit";

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    workouts: [],
    currentWorkout: null,
    isLoading: false,
  },
  reducers: {
    // adds a new workout to the list of workouts
    createWorkout: (state, action) => {
      state.isLoading = true;
      const { workout } = action.payload;
      state.workouts.push(workout);
      state.isLoading = false;
    },
    // sets the current workout
    setWorkout: (state, action) => {
      console.log("setWorkout action:", action); // log the action object
      console.log("state before setWorkout:", state); // log the state before the reducer is applied
      state.isLoading = true;
      //const { workout } = action.payload;
      state.currentWorkout = action.payload;
      state.isLoading = false;
      console.log("state after setWorkout:", state); // log the state after the reducer is applied
    },
    //updates the current workout with new information
    updateWorkout: (state, action) => {
      state.isLoading = true;
      const { workout } = action.payload;
      state.currentWorkout = { ...state.currentWorkout, ...workout };
      state.isLoading = false;
    },
    // retrieves all workouts
    seeAllWorkouts: (state, action) => {
      state.isLoading = true;
      const { workouts } = action.payload;
      state.workouts = workouts;
      state.isLoading = false;
    },
    // deletes the current workout
    deleteWorkout: (state, action) => {
      state.isLoading = true;
      const { workoutId } = action.payload;
      state.workouts = state.workouts.filter(
        (workout) => workout.id !== workoutId
      );
      state.isLoading = false;
    },
  },
});

export const {
  createWorkout,
  setWorkout,
  updateWorkout,
  seeAllWorkouts,
  deleteWorkout,
} = workoutsSlice.actions;

// which returns the list of workouts
export const selectWorkouts = (state) => state.workouts.workouts;
// returns the current workout
export const selectCurrentWorkout = (state) => state.workouts.currentWorkout;

export default workoutsSlice.reducer;
