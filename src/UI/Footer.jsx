import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-12 px-6 pt-8 pb-3 flex flex-row text-center items-center justify-around">
      <div className="flex items-start flex-col text-sm sm:text-base">
        <p>Telefone: 272555555</p>
        <p>telemovel: 94555555</p>
        <p>Email: contact@gym.com</p>
      </div>
      <div className="flex flex-col text-sm sm:text-base">
        <p>
          Made with love by <span className="text-blue-700">cabrito</span>
        </p>
      </div>
      <div className="flex items-end flex-col text-sm sm:text-base">
        <a href="www.google.com">Facebook</a>
        <a href="www.google.com">Instagram</a>
        <a href="www.google.com">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
