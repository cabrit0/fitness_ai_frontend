import React, { useState } from "react";
import moment from "moment";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FullCalendar = () => {
  const [date, setDate] = useState(moment());
  const [mode, setMode] = useState("month");
  const [showModal, setShowModal] = useState(false);

  const [selectedYear, setSelectedYear] = useState(moment().year());

  const renderHeader = () => {
    const currentMonth = date.format("MMMM");
    const currentYear = date.format("YYYY");
    return (
      <div className="flex justify-between items-center px-4 py-2 bg-gray-200 text-gray-700 font-bold opacity-100">
        <div className="text-left">
          <button
            onClick={() => setDate(date.subtract(1, "month"))}
            className="focus:outline-none hover:text-gray-800 mr-2"
          >
            <IoIosArrowBack />
          </button>
        </div>
        <div className="text-center">
          {/* Add a button to show the modal when clicked */}
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="focus:outline-none hover:text-gray-800"
          >
            {currentMonth} {currentYear}
          </button>
        </div>
        <div className="text-right">
          <button
            onClick={() => setDate(date.add(1, "month"))}
            className="focus:outline-none hover:text-gray-800"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    );
  };

  const renderModalYears = () => {
    // Create an array of years from 1900 to 2100
    const years = [];
    for (let i = 2021; i <= 2050; i++) {
      years.push(i);
    }

    return (
      <div
        className={`relative top-0 left-0 w-full h-full bg-gray-800 ${
          showModal ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto p-5 bg-white rounded-md shadow-md max-w-2xl z-50">
          <div className="font-bold text-xl mb-3">Select a year</div>
          <div className="grid grid-cols-5 gap-4">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setSelectedYear(year);
                  setDate(date.year(year));
                  setShowModal(false);
                }}
                className={`w-full h-12 rounded-md text-center ${
                  selectedYear === year ? "bg-blue-500" : "bg-gray-400"
                } text-white font-bold py-2 px-4`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderWeekdays = () => {
    const weekdays = [];
    const weekdaysInPortuguese = [
      "Dom",
      "Seg",
      "Ter",
      "Qua",
      "Qui",
      "Sex",
      "Sab",
    ];
    for (let i = 0; i < 7; i++) {
      weekdays.push(
        <div
          key={i}
          className="mx-auto p-5 w-1/12 md:w-2/12 h-12 bg-gray-800 text-center text-gray-300 rounded-2xl flex items-center justify-center"
        >
          {weekdaysInPortuguese[i]}
        </div>
      );
    }
    return (
      <div className="w-full flex items-center text-xl justify-start">
        <div className="mx-auto p-5 w-1/12 md:w-2/12 h-12 text-center text-gray-300 rounded-2xl flex items-center justify-center"></div>
        {weekdays}
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startOfMonth = date.startOf(mode).format("d");
    const endOfMonth = date.daysInMonth(); // Get the number of days in the current month
    for (let i = 0; i < startOfMonth; i++) {
      // Add empty boxes for the days before the start of the current month
      days.push(
        <div
          key={i}
          className="mx-auto p-5 w-1/12 md:w-2/12 bg-gray-400 rounded-2xl m-auto text-xl h-12 tex3-gray-500 text-center flex items-center justify-center"
        ></div>
      );
    }
    for (let i = 1; i <= endOfMonth; i++) {
      // Add boxes for the days in the current month
      days.push(
        <div
          key={i}
          className="mx-auto p-5 w-1/12 md:w-2/12 bg-gray-800 rounded-2xl text-xl h-12 text-gray-300 text-center flex items-center justify-center"
        >
          {i}
        </div>
      );
    }
    const remainingDays = 7 - ((startOfMonth + endOfMonth) % 7);
    for (let i = 1; i <= remainingDays; i++) {
      // Add empty boxes for the days after the end of the current month
      days.push(
        <div
          key={i}
          className="mx-auto p-5 w-1/12 md:w-2/12 bg-gray-400 rounded-2xl text-xl h-12 tex3-gray-500 text-center flex items-center justify-center"
        ></div>
      );
    }

    let weekNum = 0;
    let weeks = [];
    for (let i = 0; i < days.length; i++) {
      if (i % 7 === 0) {
        weekNum++;
        weeks.push(
          <div key={weekNum} className="w-full flex items-center justify-start">
            <div className="mx-auto w-1/12 md:w-2/12 h-16 text-gray-700 text-center flex items-center justify-center">
              {weekNum}
            </div>
            {days.slice(i, i + 7)}
          </div>
        );
      }
    }

    return weeks;
  };

  return (
    <div className="mx-8 md:mx-32 py-2 my-6 h-3/4 opacity-60 bg-white rounded-2xl shadow-md">
      {renderHeader()}
      {renderModalYears()}
      {!showModal && (
        <div>
          {renderWeekdays()}
          {renderDays()}
        </div>
      )}
    </div>
  );
};

export default FullCalendar;
