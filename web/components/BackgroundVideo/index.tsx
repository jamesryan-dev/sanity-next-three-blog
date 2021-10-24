import React from "react";
import { VideoBackground } from "./styled";
import { Props } from "./interface";
import Video from "../Video";

const BackgroundVideo: React.FC<Props> = ({
  videoFile,
  selectVideoType,
  videoUrl,
  fullScreenVideoComp,
}): JSX.Element => {
  return (
    <>
      <VideoBackground>
        <Video
          videoSliderFile={null}
          type="background"
          videoFile={videoFile}
          selectVideoType={selectVideoType}
          videoUrl={videoUrl}
          playing={selectVideoType}
          fullScreenVideoComp={fullScreenVideoComp}
        />

        <div className="overlay"></div>
      </VideoBackground>
    </>
  );
};

export default BackgroundVideo;
