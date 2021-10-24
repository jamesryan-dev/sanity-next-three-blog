import {MdTextFields} from 'react-icons/md'


export default {
  name: "titleText",
  title: "Title x Text",
  type: "object",
  icon: MdTextFields,
  fields: [
    {
      name: "textBlockTitle",
      title: "Title",
      type: "string",
    },
    {
      name: "textBlockText",
      title: "Enter text here",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "fullWidthOnMobile",
      title: "Full width on mobile?",
      type: "boolean"
    },
    {
      title: "Select Orientation",
      description: "Left, Center, Right",
      name: "selectTitleTextAlignText",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Left",
            value: "left",
            // icon: AiOutlineBgColors,
          },
          {
            title: "Center",
            value: "center",
            // icon: BsCardImage,
          },
          {
            title: "Right",
            value: "right",
            // icon: BsCardImage,
          },
        ],
        layout: "dropdown",
      },
    },
    {
      title: "Select Text Section",
      description: "Left, Center, Right",
      name: "selectTitleTextFlexAlign",
      type: "string",
      options: {
        list: [
          {
            title: "Left",
            value: "left",
            // icon: AiOutlineBgColors,
          },
          {
            title: "Center",
            value: "center",
            // icon: BsCardImage,
          },
          {
            title: "Right",
            value: "right",
            // icon: BsCardImage,
          },
        ],
        layout: "dropdown",
      },
    },
  ],
  preview: {
    select: {
      heading: 'Text Block',
      // media: 'image.url'
    },
    prepare() {
      return {
        title: `Title x Text`
      };
    },
  },
};
