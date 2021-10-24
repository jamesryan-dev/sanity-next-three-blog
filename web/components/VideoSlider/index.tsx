/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Props } from "./interface";
import Video from "../Video";
import {
  VideoSliderComp,
  SliderArrows,
  VideoCopy,
  Slider2Container,
  Slider3Container,
  SliderButtonComp,
  MissingImage,
  ImageContainer,
} from "./styled";
import Layout from "../Layout";
import TextBlock from "../TextBlock";
import { serializers } from "../serializer";
import client from "../../lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import MiniTitleComp from "../MiniTitle";

const VideoSlider: React.FC<Props> = ({ content }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
    setNav3(slider3.current);
  }, []);

  const gotoNext = () => {
    slider1.current.slickNext();
  };

  const gotoPrev = () => {
    slider1.current.slickPrev();
  };

  const Button = (props: {
    func?: any;
    text?: string;
    first?: boolean;
    last?: boolean;
    right?: boolean;
  }) => {
    const { func, text, first, last } = props;
    return (
      <SliderButtonComp
        first={first}
        last={last}
        role="button"
        className="arrow-btn prev"
        onClick={func}
      >
        <div className="button-container">
          <span className="button">{text}</span>
        </div>
      </SliderButtonComp>
    );
  };

  const renderArrows = (i: string | any[]) => {
    if (i.length > 1) {
      return (
        <SliderArrows className="slider-arrow">
          <Button first text="Previous" func={gotoPrev} />
          <Button last text="Next" func={gotoNext} right />
        </SliderArrows>
      );
    }
  };

  const renderInfo = (slide: {
    videoTitle:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal;
    videoDescription: any;
  }) => {
    return (
      <>
        <h2>{slide.videoTitle}</h2>
        <TextBlock
          props={slide.videoDescription}
          blocks={slide.videoDescription}
          serializers={serializers}
          imageOptions={{
            width: 500,
            height: 500,
          }}
        />
      </>
    );
  };

  const settings = {
    customPaging: function () {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
  };

  const checkSlideCountRenderDots = (count: string | any[]) => {
    if (count.length > 1) {
      return true;
    } else {
      return false;
    }
  };

  function SvgMissingImage(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
    return (
      <MissingImage>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 100 100"
          {...props}
        >
          <path d="M57.21 27.558h22.997L57.21 8.032v19.526z" />
          <path d="M59.813 73.568H7.359V9.138h42.104v21.356a4.812 4.812 0 004.81 4.811H78.36v22.24a21.103 21.103 0 011.847-.086 21.036 21.036 0 013.007.22v-23.5a3.734 3.734 0 00-3.734-3.733H56.487a2.165 2.165 0 01-2.166-2.165V8.013a3.734 3.734 0 00-3.733-3.734H4.559A2.06 2.06 0 002.5 6.34v70.03a2.06 2.06 0 002.06 2.058h54.678a20.933 20.933 0 01.575-4.859z" />
          <circle cx={41.062} cy={36.333} r={4.276} />
          <path d="M66.474 62.602L59.797 50.04a1.234 1.234 0 00-1.777-.446l-8.762 5.875a1.234 1.234 0 01-1.865-.656l-2.797-8.897a1.234 1.234 0 00-1.649-.77l-7.163 2.96a1.234 1.234 0 01-1.484-.435l-4.694-6.736a1.234 1.234 0 00-2.14.203l-11.777 26.4a1.234 1.234 0 001.128 1.737h44.528a21.086 21.086 0 015.129-6.673zM80.207 61.134A17.293 17.293 0 1097.5 78.427a17.293 17.293 0 00-17.293-17.293zm-2.919 7.833a2.924 2.924 0 013.204-2.908 3.005 3.005 0 012.633 3.03v10.354a2.919 2.919 0 01-5.837 0zm2.919 21.842a3.007 3.007 0 113.007-3.007 3.007 3.007 0 01-3.007 3.007z" />
        </svg>
      </MissingImage>
    );
  }

  const imageOrVideo = (props: { videoSliderBuilder: any }) => {
    return content.videoSliderBuilder.map(
      (
        slide: {
          selectContentType: string;
          image: any;
          videoUrl: string;
          selectVideoType: string;
          video: any;
          video2: any;
        },
        index: string
      ) => {
        if (slide.selectContentType === "images") {
          const url = urlFor(slide.image).url();
          if (url === null) {
            return <SvgMissingImage />;
          } else {
            return <img key={"imgfromVideoSliderBuilder" + index} src={url} />;
          }
        } else if (slide.selectContentType === "video") {
          return (
            <div key={"video-slide" + index}>
              <Video
                type="slider"
                key={"video" + index}
                videoUrl={slide.videoUrl}
                selectVideoType={slide.selectVideoType}
                videoSliderFile={[slide.video, slide.video2]}
                playing={slide.selectVideoType}
              />
            </div>
          );
        }
      }
    );
  };

  // Get a pre-configured url-builder from your sanity client
  const builder = imageUrlBuilder(client);

  // Then we like to make a simple function like this that gives the
  // builder an image and returns the builder for you to specify additional
  // parameters:
  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  return (
    <>
      <VideoSliderComp
        key={content.videoSlider2Title}
        selectVerticalOrientation={content.selectVerticalOrientation}
      >
        <div className="new-slider-container">
          <>
            <div className="first-slider background-image-slider">
              <Slider
                asNavFor={nav2}
                ref={slider1}
                slidesToShow={1}
                fade={true}
                arrows={false}
                speed={1000}
                focusOnSelect={false}
                accessibility={false}
              >
                {content.videoSliderBuilder.map(
                  (slide: {
                    backgroundSVG: any;
                    backgroundImage: any;
                    selectSVG: boolean;
                    selectBackgroundImage: React.Key;
                  }) => {
                    const svgUrl = urlFor(slide.backgroundSVG).url();
                    const backgroundImageUrl = urlFor(
                      slide.backgroundImage
                    ).url();

                    if (
                      slide.selectSVG === true &&
                      slide.backgroundSVG !== undefined &&
                      backgroundImageUrl !== undefined
                    ) {
                      return (
                        <>
                          <div className="crest-container">
                            <img src={svgUrl ? svgUrl : null} />
                          </div>
                          <ImageContainer
                            className="imageContainer"
                            selectBackgroundImage={slide.selectBackgroundImage}
                          >
                            <img
                              src={
                                backgroundImageUrl ? backgroundImageUrl : null
                              }
                            />
                          </ImageContainer>
                        </>
                      );
                    } else if (
                      slide.selectSVG === false &&
                      backgroundImageUrl !== undefined
                    ) {
                      return (
                        <>
                          <ImageContainer
                            key={slide.selectBackgroundImage}
                            selectBackgroundImage={slide.selectBackgroundImage}
                          >
                            <img
                              src={
                                backgroundImageUrl ? backgroundImageUrl : null
                              }
                            />
                          </ImageContainer>
                        </>
                      );
                    } else {
                      return null;
                    }
                  }
                )}
              </Slider>
            </div>
          </>
          <Layout>
            <div className="content-container">
              <Slider2Container
                selectVerticalOrientation={content.selectVerticalOrientation}
                selectOrientation={content.videoSliderBuilder}
                className="second-slider video-content-slider"
              >
                <MiniTitleComp title={content.videoSlider2Title} />
                <Slider
                  asNavFor={nav3}
                  ref={slider2}
                  slidesToShow={1}
                  swipeToSlide={true}
                  focusOnSelect={false}
                  arrows={false}
                  dots={checkSlideCountRenderDots(content.videoSliderBuilder)}
                  {...settings}
                >
                  {imageOrVideo(content)}
                </Slider>
                {renderArrows(content.videoSliderBuilder)}
              </Slider2Container>
              <Slider3Container
                selectOrientation={content.selectOrientation}
                className="third-slider further-info-slider"
                selectVerticalOrientation={content.selectVerticalOrientation}
              >
                <Slider
                  asNavFor={nav1}
                  ref={slider3}
                  slidesToShow={1}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  arrows={false}
                  dots={false}
                  fade={true}
                  speed={1000}
                  accessibility={false}
                >
                  {content.videoSliderBuilder.map(
                    (slide: any, index: string) => {
                      return (
                        <>
                          <div
                            key={"videoSlideBuilder" + index}
                            className="further-info-slider__slide"
                          >
                            <VideoCopy>{renderInfo(slide)}</VideoCopy>
                          </div>
                        </>
                      );
                    }
                  )}
                </Slider>
              </Slider3Container>
            </div>
          </Layout>
        </div>
      </VideoSliderComp>
    </>
  );
};

export default VideoSlider;
