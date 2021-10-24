/* eslint-disable react/display-name */
import React from "react";
import Layout from "../Layout";
import { LargeImageComp } from "./styled";
import client from "../../lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import MiniTitleComp from "../MiniTitle";

function LargeImage(props: { content: any }): JSX.Element {
  const { content } = props;
  const { image, largeImageTitle, selectFitToWindow } = content;

  // Get a pre-configured url-builder from your sanity client
  const builder = imageUrlBuilder(client);

  // Then we like to make a simple function like this that gives the
  // builder an image and returns the builder for you to specify additional
  // parameters:
  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  const imageUrl = urlFor(image).url();

  return (
    <Layout key={largeImageTitle}>
      <MiniTitleComp title={largeImageTitle} />
      <LargeImageComp fitToWindow={selectFitToWindow}>
        <img src={imageUrl} />
      </LargeImageComp>
    </Layout>
  );
}

export default LargeImage;
