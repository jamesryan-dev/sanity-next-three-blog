import styled from "styled-components";

export const VideoContainer = styled.div<{ loaded: any }>`
  position: relative;
  .loader-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .loader {
      width: 40px;
    }
  }
`;
