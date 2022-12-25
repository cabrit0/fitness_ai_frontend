import React from "react";
import { ImSpinner6 } from "react-icons/im";


const Loading = () => {
  return (
    <div className="mx-auto text-blue-500">
      <ImSpinner6 className="m-auto sm:w-h-12 sm:h-12 opacity-80 animate-spin" />
    </div>
  );
};

export default Loading;
