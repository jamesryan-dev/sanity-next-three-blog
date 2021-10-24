import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Props } from "./interface";
import { VideoContainer } from "./styled";
import { browserName } from "react-device-detect";

const Video: React.FC<Props> = ({
  // state,
  videoFile,
  selectVideoType,
  videoUrl,
  type,
  videoSliderFile,
  fullScreenVideoComp,
}): JSX.Element => {
  // if (state != undefined) {
  //   const { store } = state;
  // }
  const [loaded, setLoaded] = useState(false);

  const setVideoUrl = (selectVideoType: string, type: string) => {
    if (selectVideoType == "url" && videoUrl !== undefined) {
      return videoUrl;
    } else if (
      selectVideoType == "file" &&
      type == "background" &&
      videoFile.video.url !== undefined &&
      videoFile.video2.url !== undefined &&
      browserName === "Safari"
    ) {
      return [videoFile.video.url, videoFile.video2.url];
    } else if (
      selectVideoType == "file" &&
      type == "background" &&
      videoFile.video.url !== undefined &&
      videoFile.video2.url !== undefined &&
      browserName === "Chrome"
    ) {
      return [videoFile.video2.url, videoFile.video.url];
    } else if (
      selectVideoType == "file" &&
      type == "slider" &&
      videoSliderFile[0] !== undefined &&
      videoSliderFile[1] !== undefined
    ) {
      return [videoSliderFile[0].url, videoSliderFile[1].url];
    }
  };

  const setPlayingBasedOnType = (
    type: string,
    selectVideoType: string,
    fullScreenVideoComp: boolean
  ) => {
    if (selectVideoType === "file" && type === "slider") {
      return false;
    } else if (selectVideoType === "url" && type === "slider") {
      return false;
    } else if (type === "background" && fullScreenVideoComp === false) {
      return true;
    } else if (type === "background" && fullScreenVideoComp) {
      return false;
    } else {
      return false;
    }
  };

  const setControlsBasedOnType = (
    type: string,
    selectVideoType: string,
    fullScreenVideoComp: boolean
  ) => {
    if (selectVideoType === "file" && type === "slider") {
      return true;
    } else if (selectVideoType === "url" && type === "slider") {
      return true;
    } else if (selectVideoType === "file" && type === "background") {
      return false;
    } else if (fullScreenVideoComp) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <VideoContainer loaded={loaded}>
      {loaded ? null : (
        <div className="loader-wrapper">
          <img className="loader" src="/loader.gif" />
        </div>
      )}
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          style={{ opacity: loaded ? 1 : 0 }}
          url={setVideoUrl(selectVideoType, type)}
          muted={true}
          playing={setPlayingBasedOnType(
            type,
            selectVideoType,
            fullScreenVideoComp
          )}
          controls={setControlsBasedOnType(
            type,
            selectVideoType,
            fullScreenVideoComp
          )}
          loop={true}
          playsinline={true}
          onReady={() => setLoaded(true)}
          onContextMenu={(e: { preventDefault: () => any }) =>
            e.preventDefault()
          }
          config={{
            youtube: {
              playerVars: {
                showinfo: 0,
                autoplay: 0,
                color: "white",
                enablejsapi: 1,
                disablekb: 1,
                wmode: "transparent",
                modestbranding: 1,
                iv_load_policy: 3,
              },
            },
            vimeo: {
              playerOptions: {
                color: "ffffff",
              },
            },
          }}
        />
      </div>
    </VideoContainer>
  );
};

export default Video;
