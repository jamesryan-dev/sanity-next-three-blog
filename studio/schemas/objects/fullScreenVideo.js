import { FiVideo } from "react-icons/fi";
import { GoBrowser } from "react-icons/go"


export default {
  name: "fullScreenVideo",
  title: "Full Screen Embed",
  description: 'Paste the url of any youtube, vimeo, soundcloud, mixcloud and it *should* just work',
  icon: GoBrowser,
  type: "object",
  fields: [
    {
      name: "fullScreenVideoTitle",
      title: "Title",
      type: "string",
    },
    {
      title: "Select video type",
      name: "selectVideoType",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Url",
            value: "url",
            // icon: AiOutlineBgColors,
          },
          {
            title: "File",
            value: "file",
            // icon: BsCardImage,
          },
        ],
        layout: "dropdown",
      },
    },
    {
      title: "Video Url",
      name: "videoUrl",
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
      title: "Turn on/off overlay",
      name: "selectOverlay",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Yes",
            value: "yes",
            // icon: AiOutlineBgColors,
          },
          {
            title: "Off",
            value: "off",
            // icon: BsCardImage,
          },
        ],
        layout: "dropdown",
      },
    },
    
  ],
  preview: {
    select: {
      title: 'fullScreenVideoTitle',
    }
  }
};
