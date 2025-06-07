/* eslint-disable no-lone-blocks */
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./app/store";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import WorkoutsPage from "./pages/WorkoutsPage";
import CalendarioPage from "./pages/CalendarioPage";
import WellbeingPage from "./pages/WellbeingPage";
import UserSettings from "./pages/UserSettingsPage";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/workouts" element={<WorkoutsPage />} />
            <Route path="/user/exercises" element={<CalendarioPage />} />
            <Route path="/user/wellbeing" element={<WellbeingPage />} />
            <Route path="/user/settings" element={<UserSettings />} />
          </Routes>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
