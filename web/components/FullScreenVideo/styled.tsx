import styled from "styled-components";

export const VideoBackground = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: block;
  margin-bottom: 100px;
  div {
    height: 100% !important;
    width: 100% !important;
  }
  iframe {
    opacity: 1;
    filter: drop-shadow(0 4px 0 #484848);
    transition: all 0.666s ease-in 0.1s;
    &:hover {
      filter: drop-shadow(0 4px 0 #484848);
    }
  }

  @media only screen and (min-width: 768px) {
    iframe {
      opacity: 0.4;
      transition: opacity 1s ease-in;
      filter: drop-shadow(0px 4px 0px #333333);
      transition: all 0.666s ease-in 0.1s;
      &:hover {
        filter: drop-shadow(0 4px 0 #484848);
      }
    }
    &:hover {
      iframe {
        opacity: 1;
      }
    }
  }
`;

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
