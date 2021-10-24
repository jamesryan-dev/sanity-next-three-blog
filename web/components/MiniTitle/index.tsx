/* eslint-disable react/display-name */
import React from "react";
import { MiniTitle } from "./styled";

function MiniTitleComp(props: { title: string }): JSX.Element {
  const { title } = props;

  const renderTitle = () => {
    if (title) {
      return <MiniTitle>{title}</MiniTitle>;
    } else {
      return null;
    }
  };

  return <>{renderTitle()}</>;
}

export default MiniTitleComp;
