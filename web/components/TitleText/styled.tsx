import styled from "styled-components";

const flexAlign = (prop) => {
  let align;
  if (prop === "center") {
    align = "center";
  } else if (prop === "left") {
    align = "flex-start";
  } else {
    align = "flex-end";
  }
  return align;
};

const handleMargin = (prop) => {
  let align;
  if (prop === "center") {
    align = "0 auto";
  } else if (prop === "left") {
    align = "0";
  } else {
    align = "0";
  }
  return align;
};

const TextAlign = (prop) => {
  let align;
  if (prop === "center") {
    align = "center";
  } else if (prop === "left") {
    align = "left";
  } else {
    align = "right";
  }
  return align;
};

export const TextContainer = styled.div<{
  selectTitleTextAlignText: any;
  fullWidthOnMobile: any;
}>`
  margin-bottom: 100px;
  width: 66.6%;
  .textBlock {
    p {
      width: 66.6%;

      // margin: 0 auto;
      margin: ${(props) =>
        props.selectTitleTextAlignText
          ? handleMargin(props.selectTitleTextAlignText)
          : null};
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    .textBlock {
      p {
        width: ${(props) =>
          props.fullWidthOnMobile ? "100%" : "66.6%"} !important;
      }
    }
  }
`;

export const TitleTextComp = styled.section<{
  selectTitleTextAlignText: any;
  selectTitleTextFlexAlign: any;
}>`
  color: white;
  text-align: ${(props) =>
    props.selectTitleTextAlignText
      ? TextAlign(props.selectTitleTextAlignText)
      : null};
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.selectTitleTextFlexAlign
      ? flexAlign(props.selectTitleTextFlexAlign)
      : null};
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

// transform:  ${(props) => props.open ? "translateX(0%)" : "translateX(100%)"};
