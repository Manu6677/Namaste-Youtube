import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatchCache = useDispatch();

  useEffect(() => {
    //API Call

    //make an api call after every key press
    // but if the difference between 2 Api call is < 200ms
    // decline the api call

    /**
     * "iphone" : ["iphone", "iphone 11", iphone test]
     */
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSuggestions(searchCache[search]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSearchSuggestion = async () => {
    // console.log("apiCall - " + search);

    const data = await fetch(YOUTUBE_SEARCH_API + search);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // if there is no suggestion in cache do API call and update the cache by dispatch an action
    dispatchCache(
      cacheResults({
        [search]: json[1],
      })
    );
  };

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

        <a href="/">
          <img
            src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
            alt="youtube-logo"
            className="h-20 pl-3"
          />
        </a>
      </div>

      <div className=" col-span-10 px-10 mt-3 ">
        <div>
          <input
            className="border-2 border-gray-700 pl-2 w-1/2 rounded-l-full h-10"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border-black-700 h-10 w-7 mt-1 border-2 border-gray-700 rounded-r-full bg-gray-200">
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed border-gray-300 ml-2 bg-white py-2 px-5 w-1/3 rounded-md shadow-lg">
            <ul>
              {suggestions.map((item) => (
                <li
                  key={item}
                  className="py-1 px-3 shadow-sm hover:bg-gray-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center p-5 pl-6 col-span-1">
        <FaUser className="h-10 w-6" />
      </div>
    </div>
  );
};

export default Head;
