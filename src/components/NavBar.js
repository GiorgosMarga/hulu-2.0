import React from "react";
import requests from "../util/requests";
const NavBar = ({ fetchMovies }) => {
  return (
    <nav className="relative ">
      <div className="flex space-x-10 px-10 sm:px-20 text-2xl whitespace-nowrap sm:space-x-20 overflow-x-scroll scrollbar-hide ">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => fetchMovies(url)}
            key={key}
            className="hover:text-white  cursor-pointer transition duration-100 transform hover:scale-125 active:text-red-500 last:pr-24 "
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default NavBar;
