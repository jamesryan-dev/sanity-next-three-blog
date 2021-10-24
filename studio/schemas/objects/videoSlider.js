import { FiVideo } from "react-icons/fi";
import ConditionalFields from '../../components/conditional-field'
// import ConditionalField from 'sanity-plugin-conditional-field'
import { GoBrowser } from "react-icons/go"
import { BsBookHalf } from 'react-icons/bs'

export default {
  name: "videoSlider",
  title: "Embeded Content",
  description: 'Paste the url of any youtube, vimeo, soundcloud, mixcloud and it *should* just work',
  icon: BsBookHalf,
  type: "object",
  fields: [
    {
      name: "videoTitle",
      title: "Title",
      type: "string",
    },
    {
      name: "videoDescription",
      title: "Slide/Side Copy",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Select Content Type",
      name: "selectContentType",
      description: "Embed/File or Images",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Emebd (Video/Soundcloud/Mixcloud)",
            value: "video",
            // icon: AiOutlineBgColors,
          },
          {
            title: "Image",
            value: "images",
            // icon: BsCardImage,
          },
        ],
        layout: "dropdown",
      },
    },
    {
      title: "Turn on/off background SVG",
      name: "selectSVG",
      type: "boolean", 
    },
    {
      title: "Turn on/off background image",
      name: "selectBackgroundImage",
      type: "boolean",
    },
    {
      name: 'image',
      type: 'image',
      inputComponent: ConditionalFields,
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        }
      ],
      options: {
        condition: (document, context) => context().selectContentType === 'images'
      }
    },
    {
      title: "Select Video Type",
      name: "selectVideoType",
      type: "string",
      inputComponent: ConditionalFields,
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
          {
            title: "None",
            value: "none",
            description: "Use this field to hide the video fields when wanting an Image - purely cosmetic for backend tidyness"
            // icon: BsCardImage,
          },
        ],
        layout: "dropdown",
        condition: (document, context) => context().selectContentType === 'video'
      },
    },
    {
      title: "Video Url",
      name: "videoUrl",
      type: "string",
      inputComponent: ConditionalFields,
      options: {
        condition: (document, context) => context().selectVideoType === 'url'
      }
    },
    {
      title: "Video File",
      name: "video",
      description: "mp4 version",
      type: "file",
      inputComponent: ConditionalFields,
      options: {
        condition: (document, context) => context().selectVideoType === 'file'
      }
    },
    {
      title: "Video File",
      name: "video2",
      description: "WebM version",
      type: "file",
      inputComponent: ConditionalFields,
      options: {
        condition: (document, context) => context().selectVideoType === 'file' && context().selectContentType === 'video'
      }
    },
    {
      title: "Background Image",
      name: "backgroundImage",
      description: "Background image",
      type: "image",
      options: {
        hotspot: true,
        condition: (document, context) => context().selectBackgroundImage === true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        }
      ],
      inputComponent: ConditionalFields,
    },
    {
      title: "Background SVG Path",
      name: "backgroundSVG",
      description: "Background svg",
      type: "image",
      inputComponent: ConditionalFields,
      options: {
        condition: (document, context) => context().selectSVG === true
      }
    },
  ],
  preview: {
    select: {
      title: 'videoTitle',
    }
  }
};
