import React from "react";
import Button from "./Button";

const list = [
  { key: 0, value: "All" },
  { key: 1, value: "Gaming" },
  { key: 2, value: "Songs" },
  { key: 3, value: "Live" },
  { key: 4, value: "Cricket" },
  { key: 5, value: "Cooking" },
  { key: 6, value: "Valentines" },
  { key: 7, value: "Comedy" },
  { key: 8, value: "Movie" },
  { key: 9, value: "React" },
];

const Buttonlist = () => {
  return (
    <div className="flex">
      {/* <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Valentines" />
      <Button name="Comedy" />
      <Button name="Movie" />
      <Button name="React" /> */}

      {list.map((item) => (
        <Button key={item.key} name={item.value} />
      ))}
    </div>
  );
};

export default Buttonlist;
