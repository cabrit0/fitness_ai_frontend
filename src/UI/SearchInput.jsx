import React from "react";

const SearchInput = ({ onSearch }) => {
  return (
    <div className="flex items-center mx-8 px-4 py-6">
      <input
        className="appearance-none bg-gray-700 border-none rounded-2xl w-full text-gray-300 pl-4 mr-2 py-2 px-2 leading-tight focus:outline-none focus:bg-gray-600"
        type="text"
        placeholder="Procurar por nome..."
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchInput;
