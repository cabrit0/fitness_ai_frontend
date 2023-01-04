import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import moment from "moment";

const initialState = {
  userWorkouts: [],
  calendarDate: "",
  isLoading: false,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setCalendarDate(state, action) {
      state.isLoading = true;
      state.calendarDate = action.payload.toISOString();
      state.isLoading = false;
    },
    setUserCalendarWorkouts(state, action) {
      state.isLoading = true;
      state.userWorkouts = action.payload;
      state.isLoading = false;
    },
    createUserWorkout(state, action) {
      const { calendarDate, workoutId } = action.payload;
      console.log("state :", state);
      console.log("action :", action);
      state.userWorkouts.push({ calendarDate, workoutId });
    },
    fetchUserWorkouts(state, action) {
      state.isLoading = true;
      state.userWorkouts = action.payload;
      state.isLoading = false;
    },
    removeWorkout(state, action) {
      const workoutId = action.payload;
      state.userWorkouts = state.userWorkouts.filter(
        (workout) => workout.workoutId !== workoutId
      );
    },
  },
});

export const {
  setCalendarDate,
  setUserCalendarWorkouts,
  createUserWorkout,
  fetchUserWorkouts,
} = calendarSlice.actions;

export const selectUserCalendarWorkouts = (state) => state.calendar.userWorkouts;
export const selectCalendarDate = (state) => state.calendar.calendarDate;
export const removeUserWorkout = (workoutId) => ({
  type: "calendar/removeWorkout",
  payload: workoutId,
});
export const fetchCalendarWorkouts = (userId, accessToken) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://fitness-api.onrender.com/api/v1/user/calendarOptions/workouts",
        {
          id: userId,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      const assignedWorkouts = response.data.filter(
        (workout) => workout.calendarDate
      );
      //console.log(assignedWorkouts);
      return assignedWorkouts;
    } catch (error) {
      console.log(error);
    }
  };
};

export default calendarSlice.reducer;
