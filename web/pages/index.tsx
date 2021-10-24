import sanityClient from "../lib/sanityClient";
import { getVideoFile, getLoading } from "../lib/queries";
import Intro from "../components/Intro";

const Home = ({ videoFile, loading }): JSX.Element => {
  return (
    <>
      <Intro
        overlayBackgroundColor={loading[0].loadingScreenColor.hex}
        overlayBackgroundImage={loading[0].loadingScreenBackgroundImage}
        buttonTextContent={loading[0].loadingScreenButtonTextContent}
        loadingScreenChoice={loading[0].loadingScreenChoice}
        loadingScreenDescription={loading[0].loadingScreenDescription}
        loadingScreenTitle={loading[0].loadingScreenTitle}
        selectThreeDModel={loading[0].selectThreeDModel}
        videoFile={videoFile[0]}
        selectVideoType={loading[0].selectVideoType}
        videoUrl={loading[0].loadingScreenBackgroundVideo}
        buttonTextColor={""}
        type={""}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const videoFile = await sanityClient.fetch(getVideoFile);
  const loading = await sanityClient.fetch(getLoading);
  return {
    props: {
      videoFile,
      loading,
    },
    revalidate: 300,
  };
};

export default Home;
