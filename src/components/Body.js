import React from "react";

import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};
// this outlet is used to make the things dynamic like you need to choose between the routes in body (konsa component display krna hai...)
export default Body;
