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
      const { API_ENDPOINTS, getAuthHeaders } = await import("../../config/api");

      const response = await axios.post(
        API_ENDPOINTS.CALENDAR.WORKOUTS,
        {
          id: userId,
        },
        { headers: getAuthHeaders(accessToken) }
      );
      const assignedWorkouts = response.data.filter(
        (workout) => workout.calendarDate
      );
      return assignedWorkouts;
    } catch (error) {
      console.error("Erro ao buscar treinos do calendário:", error);
      return [];
    }
  };
};

export default calendarSlice.reducer;
