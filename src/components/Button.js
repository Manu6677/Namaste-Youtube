import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-400 rounded-lg m-2 px-5">{name}</button>
    </div>
  );
};

export default Button;
