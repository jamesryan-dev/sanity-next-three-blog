/* eslint-disable react/display-name */
import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import { serializers } from "../serializer";

function TextBlock(props: {
  blocks?: unknown;
  props?: unknown;
  serializers?: unknown;
  imageOptions?: unknown;
}): JSX.Element {
  return (
    <div className="textBlock">
      <BlockContent
        blocks={props.blocks ? props.blocks : null}
        serializers={serializers}
      />
    </div>
  );
}

export default TextBlock;
