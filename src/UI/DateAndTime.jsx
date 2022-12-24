import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className=" text-sm mt-4 opacity-75">
      {time.toLocaleDateString()} {time.toLocaleTimeString()}
    </p>
  );
};

export default DateTime;
