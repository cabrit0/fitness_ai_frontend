import { createSlice } from "@reduxjs/toolkit";

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    workouts: [],
    currentWorkout: null,
  },
  reducers: {
    // adds a new workout to the list of workouts
    createWorkout: (state, action) => {
      const { workout } = action.payload;
      state.workouts.push(workout);
    },
    // sets the current workout
    setWorkout: (state, action) => {
      const { workout } = action.payload;
      state.currentWorkout = workout;
    },
    //updates the current workout with new information
    updateWorkout: (state, action) => {
      const { workout } = action.payload;
      state.currentWorkout = { ...state.currentWorkout, ...workout };
    },
    // retrieves all workouts
    seeAllWorkouts: (state) => {
      return state.workouts;
    },
    // deletes the current workout
    deleteWorkout: (state, action) => {
      const { workoutId } = action.payload;
      state.workouts = state.workouts.filter(
        (workout) => workout.id !== workoutId
      );
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
