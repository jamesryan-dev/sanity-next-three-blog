import styled from "styled-components";

const renderDirectionRow = (prop: string) => {
  let css: string;
  if (prop === "LTR") {
    css = "row";
  } else if (prop === "RTL") {
    css = "row-reverse";
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

const renderDirection = (prop: string) => {
  let css: string;
  if (prop === "LTR") {
    css = "padding-right: 3rem;";
  } else if (prop === "RTL") {
    css = "padding-left: 3rem;";
  }
  return css;
};

export const GalleryTextComponent = styled.section<{
  leftOrRight?: string;

  selectVerticalOrientation: any;
}>`
  margin-bottom: 100px;
  display: flex;
  flex-direction: ${(props) =>
    props.leftOrRight ? renderDirectionRow(props.leftOrRight) : null};
  width: 100%;
  align-items: ${(props: { selectVerticalOrientation: string }) =>
    props.selectVerticalOrientation
      ? renderVerticalOrientation(props.selectVerticalOrientation)
      : null};
  .copy,
  .images {
    width: 50%;
  }

  .copy {
    padding-top: 1em;
  }

  .image {
    width: 100%;
    // max-height: 100vh;
    object-fit: contain;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    .copy,
    .images {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const MiniTitle = styled.p`
  margin-bottom: 1.25rem;
  text-align: left;
  font-size: 0.875rem;
  background: #333;
  color: #cecece;
  padding: 4px 8px;
  display: inline-flex;
  align-self: flex-start;
`;

export const GalleryCopy = styled.div`
  ${(props: { leftOrRight: string }) =>
    props.leftOrRight ? renderDirection(props.leftOrRight) : null}
`;
