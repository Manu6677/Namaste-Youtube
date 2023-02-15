import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const Head = () => {
  const [search, setSearch] = useState("Search");
  return (
    <div className="grid grid-flow-col shadow-xl">
      <div className="flex items-center px-3 cursor-pointer">
        <RxHamburgerMenu />
        <img
          src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
          alt="youtube-logo"
          className="h-20 pl-3"
        />
      </div>
      <div className="flex mt-5 w-96 rounded-full rounded-l-full border-none outline-none">
        <input
          type="text"
          placeholder="Search"
          value={setSearch}
          onChange={() => setSearch((e) => e.target.value)}
        />
        <button>
          <AiOutlineSearch />
        </button>
      </div>
      <div className="p-5 pl-6">
        <FaUser />
      </div>
    </div>
  );
};

export default Head;
