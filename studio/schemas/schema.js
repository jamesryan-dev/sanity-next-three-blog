// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./documents/blockContent";
import loadingScreen from "./documents/loadingScreen";
import singletonAbout from "./documents/singletonAbout";
import page from "./documents/page";

import breakout from "./objects/breakout";
import articleTile from "./objects/articleTile";
import imageRow from "./objects/imageRow";
import titleText from "./objects/titleText";
import imageWithAlt from "./objects/imageWithAlt";
import hero from "./objects/hero";
import videoSlider from "./objects/videoSlider";
import videoSlider2 from "./objects/videoSlider2";
import largeImage from './objects/largeImage2'
import fullScreenVideo from './objects/fullScreenVideo';
import galleryText from './objects/galleryText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    page,
    loadingScreen,
    singletonAbout,
    videoSlider2,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    // Objects
    hero,
    videoSlider,
    breakout,
    articleTile,
    imageRow,
    titleText,
    imageWithAlt,
    largeImage,
    fullScreenVideo,
    galleryText,
    // end objects
    blockContent,
  ]),
});
