import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  };

  // if (videos.length === 0) return null;
  // return <div>{videos.length > 0 && <VideoCard info={videos[0]} />}</div>;
  return (
    <div className="flex flex-wrap">
      {videos.length > 0 &&
        videos.map((item) => (
          <Link key={item.id} to={"/watch?v=" + item.id}>
            <VideoCard info={item} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
