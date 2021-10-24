import { VideoBackground } from "./styled";
import Video from "../Video";
import Layout from "../Layout";
import MiniTitleComp from "../MiniTitle";

function FullScreenVideo(props: { content: any }): JSX.Element {
  const { content } = props;
  const { videoFile, selectVideoType, videoUrl, fullScreenVideoTitle } =
    content;
  return (
    <Layout>
      <MiniTitleComp title={fullScreenVideoTitle} />
      <VideoBackground>
        <Video
          videoSliderFile={null}
          type="background"
          videoFile={videoFile}
          selectVideoType={selectVideoType}
          videoUrl={videoUrl}
          playing={false}
          fullScreenVideoComp
        />
      </VideoBackground>
    </Layout>
  );
}

export default FullScreenVideo;
