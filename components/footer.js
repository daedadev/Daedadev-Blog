import React from "react";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <footer className="flex flex-row w-full h-full justify-evenly items-center pt-10 pb-20 bg-gray-400">
      <h2 className="m-10 text-2xl w-1/2 text-center">
        Created by: Daniel Moore
      </h2>
      <div className="flex flex-row w-1/2 justify-evenly items-center">
        <img
          className="w-20 h-20"
          src="https://img.icons8.com/color/240/000000/github--v1.png"
          alt="github"
        />

        <img
          className="w-20 h-20"
          src="https://img.icons8.com/color/240/000000/twitter--v1.png"
          alt="twitter"
        />

        <img
          className="w-20 h-20"
          src="https://img.icons8.com/color/240/000000/linkedin.png"
          alt="linkedin"
        />
      </div>
    </footer>
  );
}

export default Footer;
