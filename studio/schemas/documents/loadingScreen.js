// in loadingScreen.js
import { BiLoader } from "react-icons/bi";
import { AiOutlineBgColors } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";

export default {
  title: "Loading Screen Title",
  name: "loadingScreen",
  type: "document",
  icon: BiLoader,
  //   __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Select 3d model",
      name: "selectThreeDModel",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Bishop",
            value: "bishop",
            // icon: AiOutlineBgColors,
          },
          {
            title: "Computer",
            value: "computer",
            // icon: BsCardImage,
          },
          {
            title: "Madrona",
            value: "madrona",
            // icon: BsCardImage,
          },
          {
            title: "Snowy Mountains",
            value: "snow",
            // icon: BsCardImage,
          },
          {
            title: "Skeleton Shape",
            value: "shape",
            // icon: BsCardImage,
          },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "loadingScreenTitle",
      title: "Title",
      type: "string",
    },
    {
      name: "loadingScreenDescription",
      title: "Description",
      type: "text",
    },
    {
      title: "Background color, image or video?",
      name: "loadingScreenChoice",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Colour",
            value: "loadingScreenBackgroundColourChoice",
            // icon: AiOutlineBgColors,
          },
          {
            title: "Image",
            value: "loadingScreenBackgroundImageChoice",
            // icon: BsCardImage,
          },
          {
            title: "Video",
            value: "loadingScreenBackgroundVideoChoice",
            // icon: BsCardImage,
          },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "loadingScreenColor",
      title: "Background Color",
      description: "Choose either background color or background image",
      type: "color",
    },
    {
      name: "loadingScreenBackgroundImage",
      title: "Background Image",
      type: "image",
    },
    {
      title: "Select Video Url or File?",
      name: "selectVideoType",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "File",
            value: "file",
            // icon: AiOutlineBgColors,
          },
          {
            title: "Url",
            value: "url",
            // icon: BsCardImage,
          },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "loadingScreenBackgroundVideo",
      title: "Background Video",
      description:
        "Use this field to enter a youtube or vimeo url string use the field below to upload a file, preferably webm as this is best format for video on the web (small filesize)",
      type: "string",
    },
    {
      title: "Video file",
      name: "video",
      description: "mp4 version",
      type: "file",
    },
    {
      title: "Video file",
      name: "video2",
      description: "WebM version",
      type: "file",
    },
    {
      name: "loadingScreenButtonTextContent",
      title: "Button Text",
      type: "string",
    },
  ],
};
