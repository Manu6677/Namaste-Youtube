import React from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div>
      <ButtonList />
      <VideoContainer />
      <VideoCard />
    </div>
  );
};

export default MainContainer;
