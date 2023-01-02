import React, { useState } from "react";
import Calendar from "react-calendar";

function FullCalendar() {
  const [value, setValue] = useState(new Date()); // Initialize state with current date

  const handleChange = (newValue) => {
    setValue(newValue); // Update state with new value
    console.log(value);
  };

  return (
    <div>
      <Calendar
        className="calendar mx-8 md:mx-64"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default FullCalendar;
