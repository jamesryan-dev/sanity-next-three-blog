import styled from "styled-components";

const renderOverlay = (prop: boolean) => {
  let css: string;
  if (prop === true) {
    css = "";
  } else if (prop === false) {
    css = null;
  }
  return css;
};

const renderVerticalOrientation = (prop: string) => {
  let css: string;
  if (prop === "top") {
    css = "flex-start";
  } else if (prop === "center") {
    css = "center";
  } else if (prop === "bottom") {
    css = "flex-end";
  }
  return css;
};

export const MiniTitle = styled.p`
  margin-bottom: 20px;
  text-align: left;
  font-size: 14px;
  background: #333333;
  color: #cecece;
  padding: 4px 8px;
  display: inline-flex;
  align-self: flex-start;
`;

export const ImageContainer = styled.div<{ selectBackgroundImage: any }>`
  position: relative;
  &::after {
    content: "";
    background: #151515;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${(props: { selectBackgroundImage: any }) =>
      props.selectBackgroundImage ? "0.666" : null};
  }
`;

export const SliderContainer = styled.div`
  .second-slider,
  .third-slider {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MissingImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 33.333% !important;
    fill: #e62117;
  }
`;

export const Slider2Container = styled.div<{
  selectVerticalOrientation: any;
  selectOrientation: any;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  justify-content: ${(props: { selectVerticalOrientation: any }) =>
    props.selectVerticalOrientation
      ? renderVerticalOrientation(props.selectVerticalOrientation)
      : null};

  grid-area: content;
  grid-area: ${(props: { selectOrientation: any }) =>
    props.selectOrientation ? "additional" : "content"};
`;

export const Slider3Container = styled(SliderContainer)<{
  selectOrientation: any;
  selectVerticalOrientation: any;
}>`
  display: flex;
  flex-direction: column;

  grid-area: additional;
  grid-area: ${(props: { selectOrientation: any }) =>
    props.selectOrientation ? "additional" : "content"};
  justify-content: ${(props: { selectVerticalOrientation: any }) =>
    props.selectVerticalOrientation
      ? renderVerticalOrientation(props.selectVerticalOrientation)
      : null};
  .slick-slider {
    width: 100%;
  }
`;

export const VideoSliderComp = styled.div<{
  selectVerticalOrientation?: any;
  selectBackgroundImage?: any;
}>`
  .new-slider-container {
    height: 100vh;
    width: 100%;
    object-fit: contain;
    position: relative;
    margin-bottom: 100px;
    .crest-container {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      img {
        object-fit: cover;
        height: 100%;
        opacity: 0.855;
        transform: scale(1);
      }
    }
    .first-slider {
      height: 100%;
      .slick-slider,
      .slick-list {
        height: 100%;
      }
      img {
        width: 100%;
      }
      position: relative;
      &::after {
        background: #151515;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1.888;
      }
      .slick-slide {
        position: relative;
        &:after {
          background: #151515;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 1.888;
        }
      }
    }

    @media only screen and (max-width: 1000px) {
      height: auto;
      overflow: hidden;

      .first-slider {
        .slick-slide {
          height: 100vh;
          height: 100%;
          div,
          img {
            height: 100%;
          }
        }
      }
    }
  }

  div {
    &:focus {
      outline: none !important;
    }
  }
  .slick-dots {
    position: absolute;
    bottom: -40px;
    width: 100%;
    width: auto;
    left: 0;
    li {
      height: initial;
      width: initial;
    }
    z-index: 3;
    .dot {
      background: transparent;

      background: #969696;
      border: 1px solid var(--nice-dark);
      border: none;
      padding: 3px;
      border-radius: 100%;
      transform: scale(0.9333);
    }
    .slick-active .dot {
      background: white;
      transform: scale(1);
    }
  }

  .layout {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .content-container {
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-template-areas:
      "content additional"
      "content additional";
  }

  .second-slider {
    grid-area: content;
    height: 100%;
    width: 100%;
    z-index: 2;
    .slick-list {
      overflow: hidden;
    }
    .slick-initialized .slick-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
      overflow: hidden;
      opacity: 0;
      transition: opacity 1s ease;
      transition-delay: 0.2s;
      div {
        width: 100% !important;
      }
    }
    .slick-slide.slick-active {
      opacity: 1;
      transition: opacity 1s ease;
      transition-delay: 0.1s;
    }
    iframe,
    video {
      filter: drop-shadow(0px 4px 0px #333333);
      transition: all 0.666s ease-in 0.1s;
      &:hover {
        filter: drop-shadow(0 4px 0 #484848);
      }
    }
    video {
      height: initial;
    }
  }

  .third-slider {
    grid-area: additional;
    color: white;
    align-items: center;
    z-index: 4;
  }

  .further-info-slider__slide {
    height: auto;
    display: flex !important;
    align-items: center;
    width: 100%;
    overflow-y: scroll;

    h2 {
      display: inline-block;
      position: relative;
    }
  }

  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    height: 100% !important;
  }

  @media only screen and (max-width: 1000px) {
    .background-image-slider {
      position: absolute;
      top: 0;
      left: 0;
    }

    .layout {
      position: relative;
    }

    .further-info-slider__slide {
      height: auto;
      width: 100%;
    }

    .content-container {
      display: flex;
      flex-direction: column;
    }

    .second-slider {
      overflow: initial;
      margin-bottom: 50px;
    }
  }

  @media only screen and (max-width: 1000px) {
    .further-info-slider__slide {
      align-items: flex-start;
    }
  }
`;

export const VideoCopy = styled.div`
  padding: 1em;
  padding-left: 3em;
  padding-right: 3rem;
  width: 95%;
  margin: 0 auto;

  @media only screen and (max-width: 1000px) {
    padding: 0;
    width: 100%;
  }
`;

export const SliderButtonComp = styled.div<{ first: any; last: any }>`
  position: relative;
  svg {
    opacity: 1;
    transition: all 0.333s ease-in 0.1s;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  span {
    padding-left: ${(props: { first: any }) => (props.first ? "0" : "3px")};
    padding-right: ${(props: { last: any }) => (props.last ? "0" : "3px")};
  }
  &:hover {
    .button-container {
      span {
        opacity: 1;
      }
      svg {
        opacity: 1;
      }
    }
  }
`;

export const SliderArrows = styled.div`
  grid-area: content;
  position: absolute;
  bottom: -60px;
  width: 100%;
  position: relative;

  display: flex;
  height: auto;
  color: white;
  color: var(--nice-dark);
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  padding: 0;

  .arrow-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
    img {
      width: 30px;
    }
    span {
      opacity: 0.8;
      transition: all 0.333s ease-in-out;
    }
    &:hover {
      span {
        color: #f9f9f9;
      }
    }
  }
  .prev {
    img {
      transform: rotate(-90deg);
    }
  }
  .next {
    img {
      transform: rotate(-270deg);
    }
  }

  @media only screen and (max-width: 1000px) {
    bottom: 0;
  }
`;
