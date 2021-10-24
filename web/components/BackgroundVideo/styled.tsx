import styled from "styled-components";

export const VideoBackground = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 201;
  pointer-events: none;
  z-index: 200;
  opacity: 1;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #151515;
    opacity: 0.666;
  }
  * {
    transition: all 0.333s ease;
  }
  div {
    height: 100% !important;
    width: 100% !important;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(1.2);
  }

  @media only screen and (max-width: 1200px) {
    video {
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 768px) {
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scale(1.3);
    }
  }
`;
