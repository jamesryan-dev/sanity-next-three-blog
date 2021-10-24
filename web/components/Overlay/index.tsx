import React from "react";
import styled from "styled-components";
import { Props } from "./interface";

const OverlayComp = styled.div`
  opacity: 1};
  z-index: 1;
  background: #151515;
  height: 100%;
  width: 100%;
  z-index: 16;
  top: 0;
  left: 0;
  position: fixed;
  transition: all 1s;
`;

const Overlay: React.FC<Props> = ({}) => {
  return <OverlayComp className="menu-overlay" />;
};

export default Overlay;
