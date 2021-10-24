import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import BackgroundVideo from "../BackgroundVideo";
import { Props } from "./interface";
import {
  CanvasDiv,
  LoadingContent,
  LoadingContentWrapper,
  OverlayCTA,
  OverlayComp,
} from "./styled";
import { isMobile } from "react-device-detect";

const Canvas = dynamic(() => import("../Three/Intro"), { ssr: false });

const Intro: React.FC<Props> = ({
  overlayBackgroundColor,
  overlayBackgroundImage,
  buttonTextContent,
  buttonTextColor,
  loadingScreenChoice,
  loadingScreenDescription,
  loadingScreenTitle,
  selectThreeDModel,
  videoFile,
  selectVideoType,
  videoUrl,
}): JSX.Element => {
  const renderChoice = (loadingScreenChoice: string) => {
    let choice: JSX.Element;
    if (
      loadingScreenChoice == "loadingScreenBackgroundColourChoice" ||
      loadingScreenChoice == "loadingScreenBackgroundImageChoice" ||
      isMobile === true
    ) {
      return (choice = (
        <OverlayCTA
          overlayBackgroundColor={overlayBackgroundColor}
          overlayBackgroundImage={overlayBackgroundImage}
          buttonTextColor={buttonTextColor}
          loadingScreenChoice={loadingScreenChoice}
        />
      ));
    } else if (loadingScreenChoice == "loadingScreenBackgroundVideoChoice") {
      return (choice = (
        <BackgroundVideo
          videoFile={videoFile}
          selectVideoType={selectVideoType}
          videoUrl={videoUrl}
          fullScreenVideoComp={false}
        />
      ));
    }
  };
  return (
    <OverlayComp>
      {renderChoice(loadingScreenChoice)}
      <LoadingContentWrapper>
        <LoadingContent>
          <h2 className="title">
            {loadingScreenTitle ? loadingScreenTitle : null}
          </h2>
          <p className="copy">
            {loadingScreenDescription ? loadingScreenDescription : null}
          </p>
          <Link href="/landing">
            <a>{buttonTextContent ? buttonTextContent : "Enter"}</a>
          </Link>
        </LoadingContent>
      </LoadingContentWrapper>

      <CanvasDiv>
        <Canvas type={selectThreeDModel} />
      </CanvasDiv>
    </OverlayComp>
  );
};

export default Intro;
