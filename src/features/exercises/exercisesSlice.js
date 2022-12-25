import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExercises = createAsyncThunk(
  "exercises/fetchExercises",
  async (args, thunkAPI) => {
    const response = await axios.get(
      "https://fitness-api.onrender.com/api/v1/exercises/allExercises"
    );
    const randomExercises = getRandomExercises(response.data, 6);
    thunkAPI.dispatch(setRandomExercises(randomExercises));
    return response.data;
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
