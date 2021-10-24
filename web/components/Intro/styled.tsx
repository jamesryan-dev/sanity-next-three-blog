import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../../lib/sanityClient";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export const backgroundImageOrColor = (props: {
  loadingScreenChoice: string;
  overlayBackgroundImage: string;
  overlayBackgroundColor: string;
}) => {
  const {
    loadingScreenChoice,
    overlayBackgroundImage,
    overlayBackgroundColor,
  } = props;
  if (loadingScreenChoice !== undefined) {
    if (
      loadingScreenChoice === "loadingScreenBackgroundColourChoice" &&
      overlayBackgroundColor !== undefined
    ) {
      return `
          background-color: ${overlayBackgroundColor};
        `;
    } else if (
      loadingScreenChoice === "loadingScreenBackgroundImageChoice" &&
      overlayBackgroundImage !== undefined
    ) {
      const url = urlFor(overlayBackgroundImage).url();
      return `
          background-image: url( ${url} );
          background-size: cover;
          background-repeat: no-repeat;
          &::before {
            content: '';
            height: 100%;
            width: 100%;
            background: #151515;
            opacity: .8;
            position: absolute;
            top: 0;
            left: 0;
          }
          button {}
        `;
    }
  } else {
    return `
        background: #151515;
      `;
  }
};

export const OverlayComp = styled.div`
  z-index: 200;
  opacity: 1;
  transition: opacity 1s ease;
`;

export const OverlayCTA = styled.div<{
  overlayBackgroundColor: string;
  overlayBackgroundImage: any;
  loadingScreenChoice: string;
  buttonTextColor: string;
}>`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 1s ease;
  z-index: 200;
  opacity: 1;

  ${(props) => backgroundImageOrColor(props)}
`;

export const LoadingContentWrapper = styled.div`
  z-index: 202;
  position: fixed;
  bottom: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingContent = styled.div`
  width: 33.33%;
  margin: 0 auto;
  font-family: "Lora", serif;
  z-index: 200;
  opacity: 1;
  transition: opacity 1s ease;
  display: inline-flex;
  flex-direction: column;

  .title {
    margin-bottom: 0.777em;
    font-size: 1.875rem;
  }

  .copy {
    margin-bottom: 1.2em;
  }

  a {
    display: inline-flex;
    width: auto;
    border: 1px solid white;
    padding: 5px 10px;
    font-size: 1rem;
    border-left-color: transparent;
    border-right-color: transparent;
    text-decoration: none;
    transition: all 0.444s linear;
    transition-delay: 0.1s;
  }

  @media only screen and (min-width: 1000px) {
    a {
      &:hover {
        border-color: transparent;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 66.6%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 5%;
  }
`;

export const CanvasDiv = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 201;
  z-index: 200;
  opacity: 1;
  transition: opacity 1s ease;
  div {
    position: absolute !important;
    top: 0;
    right: 0;
  }
`;
