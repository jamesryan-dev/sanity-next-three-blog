/* eslint-disable react/display-name */
import React from "react";
import Layout from "../Layout";
import { TitleTextComp, MiniTitle, TextContainer } from "./styled";
import TextBlock from "../TextBlock";

function TitleText(props: { content: any; blocks?: any }): JSX.Element {
  const { content, blocks } = props;
  const {
    textBlockTitle,
    textBlockText,
    selectTitleTextAlignText,
    selectTitleTextFlexAlign,
    fullWidthOnMobile,
  } = content;
  return (
    <Layout>
      <TitleTextComp
        selectTitleTextAlignText={selectTitleTextAlignText}
        selectTitleTextFlexAlign={selectTitleTextFlexAlign}
      >
        <TextContainer
          selectTitleTextAlignText={selectTitleTextAlignText}
          fullWidthOnMobile={fullWidthOnMobile}
        >
          <MiniTitle>{textBlockTitle}</MiniTitle>
          <TextBlock blocks={textBlockText} />
        </TextContainer>
      </TitleTextComp>
    </Layout>
  );
}

export default TitleText;
