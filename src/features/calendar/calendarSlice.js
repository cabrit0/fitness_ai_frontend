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
  },
});

export const {
  setCalendarDate,
  setUserCalendarWorkouts,
  createUserWorkout,
  fetchUserWorkouts,
} = calendarSlice.actions;

export const selectUserWorkouts = (state) => state.calendar.userWorkouts;
export const selectCalendarDate = (state) => state.calendar.calendarDate;
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
      console.log(response.data);
      //console.log()
    } catch (error) {
      console.log(error);
    }
  };
};

export default calendarSlice.reducer;
