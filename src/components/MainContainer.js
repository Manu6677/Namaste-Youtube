import React from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11 h-screen">
      <ButtonList />
      <VideoContainer />
      <VideoCard />
    </div>
  );
};

export default MainContainer;
