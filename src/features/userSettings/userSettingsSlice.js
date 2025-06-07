import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ENDPOINTS } from "../../config/api";

export const deleteUser = createAsyncThunk(
  "userSettings/deleteUser",
  async (userId) => {
    try {
      await axios.delete(API_ENDPOINTS.USERS, {
        params: {
          id: userId,
        },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchAllUsers = createAsyncThunk(
  "userSettings/fetchAllUsers",
  async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.USERS);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const refreshUser = createAsyncThunk(
  "userSettings/refreshUser",
  async (userId) => {
    try {
      const response = await axios.get(API_ENDPOINTS.USER_BY_ID, {
        params: {
          id: userId,
        },
      });
      console.log(userId);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState: {
    users: [],
    currentUser: null,
    isLoading: false,
  },
  reducers: {
    // retrieves all users
    seeAllUsers: (state, action) => {
      state.isLoading = true;
      const { users } = action.payload;
      state.users = users;
      state.isLoading = false;
    },
    // searches for a user by ID
    searchUserById: (state, action) => {
      state.isLoading = true;
      const { id } = action.payload;
      const user = state.users.find((user) => user.id === id);
      state.currentUser = user || null;
      state.isLoading = false;
    },
    // searches for a user by name
    searchUserByName: (state, action) => {
      state.isLoading = true;
      const { userName } = action.payload;
      const user = state.users.find((user) => user.name === userName);
      state.currentUser = user || null;
      state.isLoading = false;
    },
    // updates the current user with new information
    updateUser: (state, action) => {
      state.isLoading = true;
      const { user } = action.payload;
      state.currentUser = { ...state.currentUser, ...user };
      state.isLoading = false;
    },
    // deletes the current user
    deleteUser: (state, action) => {
      state.isLoading = true;
      const { userId } = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
      state.currentUser = null;
      state.isLoading = false;
    },
    // adds a new user to the list of users
    createNewUser: (state, action) => {
      state.isLoading = true;
      const { user } = action.payload;
      state.users.push(user);
      state.isLoading = false;
    },
  },
  extraReducers: {
    [refreshUser.pending]: (state) => {
      state.isLoading = true;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    [refreshUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  seeAllUsers,
  searchUserById,
  searchUserByName,
  updateUser,
  createNewUser,
} = userSettingsSlice.actions;

// which returns the list of users
export const selectUsers = (state) => state.userSettings.users;
// returns the current user
export const selectCurrentUser = (state) => state.userSettings.currentUser;

export default userSettingsSlice.reducer;
