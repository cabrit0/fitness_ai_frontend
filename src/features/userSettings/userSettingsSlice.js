import { createSlice } from "@reduxjs/toolkit";

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
      const { userId } = action.payload;
      const user = state.users.find((user) => user.id === userId);
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
});

export const {
  seeAllUsers,
  searchUserById,
  searchUserByName,
  updateUser,
  deleteUser,
  createNewUser,
} = userSettingsSlice.actions;

// which returns the list of users
export const selectUsers = (state) => state.userSettings.users;
// returns the current user
export const selectCurrentUser = (state) => state.userSettings.currentUser;

export default userSettingsSlice.reducer;
