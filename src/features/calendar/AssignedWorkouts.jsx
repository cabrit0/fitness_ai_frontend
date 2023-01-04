import moment from "moment";
import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserCalendarWorkouts } from "../calendar/calendarSlice";
import { fetchCalendarWorkouts } from "../calendar/calendarSlice";

const AssignedWorkouts = () => {
  const dispatch = useDispatch();
  const userAccessToken = useSelector((state) => state.login.user.accessToken);
  const id = useSelector((state) => state.login.user.foundUser._id);
  const assignedWorkouts = useSelector(selectUserCalendarWorkouts);
  const [fetchedWorkouts, setFetchedWorkouts] = useState([]);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const fetchData = async () => {
      const workouts = await dispatch(
        fetchCalendarWorkouts(id, userAccessToken)
      );
      setFetchedWorkouts(workouts);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col px-8 py-2">
      <h3 className="text-2xl text-gray-300 font-bold mb-4">Assigned Workouts</h3>
      <div className="flex flex-col space-y-2">
        {fetchedWorkouts.length === 0 ? (
          <div className="text-center text-gray-600">No assigned workouts.</div>
        ) : (
          fetchedWorkouts.map((workout) => {
            // Parse the calendarDate string into a Date object
            const workoutDate = new Date(workout.calendarDate);
            return (
              <div
                key={workout._id}
                className="flex justify-between px-4 py-2 rounded-lg bg-gray-200 opacity-70"
              >
                <div className="flex items-center text-2xl font-bold text-blue-400">
                  {workout.name}
                </div>
                <div className="flex items-center pr-6 text-sm font-bold text-center text-gray-600">
                  {workoutDate.toLocaleDateString('pt-PT', options)}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AssignedWorkouts;
