/* eslint-disable react/display-name */
import React from "react";
import Layout from "../Layout";
import { GalleryTextComponent, GalleryCopy } from "./styled";
import client from "../../lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import TextBlock from "../TextBlock";
import MiniTitleComp from "../MiniTitle";

function GalleryText(props: { content: any; leftOrRight?: any }): JSX.Element {
  // Get a pre-configured url-builder from your sanity client
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  const { content } = props;
  const {
    images,
    textBlockText,
    galleryTextTitle,
    leftOrRight,
    selectVerticalOrientation,
  } = content;

  return (
    <Layout>
      <MiniTitleComp title={galleryTextTitle} />
      <GalleryTextComponent
        leftOrRight={leftOrRight}
        selectVerticalOrientation={selectVerticalOrientation}
      >
        <GalleryCopy className="copy" leftOrRight={leftOrRight}>
          <TextBlock blocks={textBlockText} />
        </GalleryCopy>
        <div className="images">
          {images.map((image: any, i: React.Key) => {
            const imageUrl = urlFor(image).url();
            return <img className="image" key={i} src={imageUrl} />;
          })}
        </div>
      </GalleryTextComponent>
    </Layout>
  );
}

export default GalleryText;
