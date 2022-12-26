/* eslint-disable no-lone-blocks */
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./app/store";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import WorkoutsPage from "./pages/WorkoutsPage";
import ExercisesPage from "./pages/ExercisesPage";
import WellbeingPage from "./pages/WellbeingPage";
import UserSettings from "./pages/UserSettingsPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/user" element={<UserProfilePage />}>
            <Route path="/user/workouts" element={<WorkoutsPage />}></Route>
            <Route path="/user/exercises" element={<ExercisesPage />}></Route>
            <Route path="/user/home" element={<UserProfilePage />}></Route>
            <Route path="/user/wellbeing" element={<WellbeingPage />}></Route>
            <Route path="/user/settings" element={<UserSettings />}></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
