import { createSlice } from "@reduxjs/toolkit";
//import moment from "moment";

const initialState = {
  userWorkouts: [],
  calendarDate: new Date(),
  isLoading: false,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setCalendarDate(state, action) {
      state.isLoading = true;
      state.calendarDate = action.payload;
      state.isLoading = false;
    },
    setUserWorkouts(state, action) {
      state.isLoading = true;
      state.userWorkouts = action.payload;
      state.isLoading = false;
    },
    createUserWorkout(state, action) {
      const { calendarDate, workoutId } = action.payload;
      console.log(action.payload);
      state.userWorkouts.push({ calendarDate, workoutId });
    },
  },
});

export const { setCalendarDate, setUserWorkouts, createUserWorkout } =
  calendarSlice.actions;

export const selectUserWorkouts = (state) => state.calendar.userWorkouts;
export const selectCalendarDate = (state) => state.calendar.calendarDate;

export default calendarSlice.reducer;
