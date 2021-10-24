import Head from "next/head";
import { Key } from "react";
import sanityClient from "../lib/sanityClient";
import { getPageBuilder, getSettings } from "../lib/queries";
import VideoSlider from "../components/VideoSlider";
import TitleText from "../components/TitleText";
import LargeImage from "../components/LargeImage";
import FullScreenVideo from "~/components/FullScreenVideo";
import GalleryText from "../components/GalleryText";

const Page = ({ pageBuilderContent, siteSettingsContent }): JSX.Element => {
  const contentStore = pageBuilderContent[0].pageBuilder;
  const siteSettings = siteSettingsContent[0];

  const content = contentStore.map((c: { _type: any }, i: Key) => {
    let el = null;
    switch (c._type) {
      case "videoSlider2":
        el = <VideoSlider content={c} key={i} />;
        break;
      case "titleText":
        el = <TitleText content={c} key={i} />;
        break;
      case "largeImage":
        el = <LargeImage content={c} key={i} />;
        break;
      case "fullScreenVideo":
        el = <FullScreenVideo content={c} key={i} />;
        break;
      case "galleryText":
        el = <GalleryText content={c} key={i} />;
        break;
      default:
        el = null;
    }
    return el;
  });

  return <>{content}</>;
};

export const getStaticProps = async () => {
  const pageBuilderContent = await sanityClient.fetch(getPageBuilder);
  const siteSettingsContent = await sanityClient.fetch(getSettings);
  return {
    props: {
      pageBuilderContent,
      siteSettingsContent,
    },
    revalidate: 300,
  };
};

export default Page;
