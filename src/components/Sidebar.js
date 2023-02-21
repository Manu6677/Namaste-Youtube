import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return
  //   if (!isMenuOpen) return null;

  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-40">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Video </li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-4">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming </li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-4">Water Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming </li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
