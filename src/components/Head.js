import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const [search, setSearch] = useState("Search");
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-xl">
      <div className="flex items-center px-3 cursor-pointer col-span-1">
        <RxHamburgerMenu
          className="h-10 w-7"
          onClick={() => toggleMenuHandler()}
        />
        <img
          src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
          alt="youtube-logo"
          className="h-20 pl-3"
        />
      </div>

      <div className=" col-span-10 flex items-center pl-11">
        <input
          className="border-2 border-gray-700 pl-2 w-1/2 rounded-l-full h-10"
          type="text"
          placeholder="Search"
        />
        <button className="  border-black-700">
          <AiOutlineSearch className="h-10 w-8 border-2 border-gray-700 rounded-r-full bg-gray-200" />
        </button>
      </div>

      <div className="flex items-center p-5 pl-6 col-span-1">
        <FaUser className="h-10 w-6" />
      </div>
    </div>
  );
};

export default Head;
