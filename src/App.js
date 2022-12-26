/* eslint-disable no-lone-blocks */
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./app/store";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import WorkoutsPage from "./pages/WorkoutsPage";
/* import UserPage from "./features/users";
import ExercisePage from "./features/exercises";
import ActivityPage from "./features/activities";
import Navigation from "./layouts/navigation";
import Footer from "./layouts/footer";*/

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/user" element={<UserProfilePage />}>
            <Route path="/user/workouts" element={<WorkoutsPage />}></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

{
  /* <Provider store={store}>
  <Router>
    <Navigation />
    <Routes>
      <Route exact path="/" component={HomePage} />
      <Route path="/users" component={UserPage} />
          <Route path="/exercises" component={ExercisePage} />
          <Route path="/activities" component={ActivityPage} />
          <Route path="/workouts" component={WorkoutPage} />
          <Route path="/auth" component={AuthPage} />
    </Routes>
    <Footer />
  </Router>
</Provider>; */
}
