import React, { useState, useEffect } from "react";
import moment from "moment";

function Calendar() {
  // eslint-disable-next-line no-unused-vars
  const [currentDate, setCurrentDate] = useState(moment());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const startDate = moment(currentDate).subtract(3, "days");
    const endDate = moment(currentDate).add(3, "days");

    const tempDays = [];
    let day = startDate;
    while (day <= endDate) {
      tempDays.push(day);
      day = day.clone().add(1, "d");
    }
    setDays(tempDays);
  }, [currentDate]);

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  return (
    <div className="px-10 ">
      <h2 className="text-gray-300 text-center text-xl font-bold">
        Esta semana
      </h2>
      <div className="flex sm:justify-center py-4 overflow-x-scroll sm:overflow-x-hidden sm:scrollbar-none">
        {days.map((day) => (
          <div key={day} className="flex flex-col items-center">
            <div
              className={`text-gray-600 font-bold ${
                day.isSame(currentDate, "day") ? "text-white" : "text-gray-300"
              }`}
            >
              {weekDays[day.day()]}
            </div>
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-lg ${
                day.isSame(currentDate, "day")
                  ? "bg-blue-500 text-white opacity-70 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:border-transparent hover:scale-105 hover:opacity-100"
                  : "bg-gray-300 text-gray-700 opacity-70 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:border-transparent hover:scale-105 hover:opacity-100"
              } mx-0.5 `}
            >
              {day.format("D")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
