import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-12 p-2 flex flex-row text-center items-center justify-around">
      <div className="flex flex-col">
        <p>Telephone: 555-555-5555</p>
        <p>Cellphone: 555-555-5555</p>
        <p>Email: contact@gym.com</p>
      </div>
      <div className="flex flex-col">
        <p>Code with love by cabrit0</p>
      </div>
      <div className="flex flex-col">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
