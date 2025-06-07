import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/api";

export const fetchExercises = createAsyncThunk(
  "exercises/fetchExercises",
  async (args, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const userAccessToken = state.login.user?.accessToken;

      if (!userAccessToken) {
        throw new Error("Utilizador não autenticado");
      }

      const response = await axios.get(
        API_ENDPOINTS.EXERCISES.ALL,
        {
          headers: getAuthHeaders(userAccessToken)
        }
      );

      const randomExercises = getRandomExercises(response.data, 3);
      thunkAPI.dispatch(setRandomExercises(randomExercises));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

function getRandomExercises(exercises, count) {
  const randomExercises = [];
  while (randomExercises.length < count) {
    const randomIndex = Math.floor(Math.random() * exercises.length);
    const randomExercise = exercises[randomIndex];
    if (!randomExercises.includes(randomExercise)) {
      randomExercises.push(randomExercise);
    }
  }
  return randomExercises;
}

const exerciseSlice = createSlice({
  name: "exercises",
  initialState: {
    exercises: [],
    randomExercises: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setRandomExercises: (state, action) => {
      state.randomExercises = action.payload;
    },
    viewAllExercises: (state, action) => {
      state.randomExercises = state.exercises;
    },
  },
  extraReducers: {
    [fetchExercises.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchExercises.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.exercises = action.payload;
      state.error = null;
    },
    [fetchExercises.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const { setRandomExercises, viewAllExercises } = exerciseSlice.actions;

export const selectExercises = (state) => state.exercises.exercises;
export const selectRandomExercises = (state) => state.exercises.randomExercises;
export const selectIsLoading = (state) => state.exercises.isLoading;
export const selectError = (state) => state.exercises.error;

export default exerciseSlice.reducer;
