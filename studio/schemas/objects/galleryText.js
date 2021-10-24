// imageGallery.js
import {BsFileRichtext} from 'react-icons/bs'

export default {
  name: "galleryText",
  type: "object",
  title: "Image[s] x text",
  icon: BsFileRichtext,
  fields: [
    {
        name: "galleryTextTitle",
        title: "Title",
        type: "string",
      },
      {
        title: "Select Orientation",
        name: "leftOrRight",
        description: "Left to Right (copy x image[s]) or Right to Left (image[s] x copy)",
        type: "string",
        validation: (Rule) => Rule.required(),
        options: {
          list: [
            {
              title: "Left to Right",
              value: 'LTR',
              // icon: AiOutlineBgColors,
            },
            {
              title: "Right to Left",
              value: 'RTL',
              // icon: BsCardImage,
            },
          ],
          layout: "dropdown",
        },
      },
      {
        title: "Select Content Vertical Orientation",
        name: "selectVerticalOrientation",
        type: "string",
        validation: (Rule) => Rule.required(),
        options: {
          list: [
            {
              title: "Top",
              value: "top",
            },
            {
              title: "Center",
              value: "center",
            },
          ],
          layout: "dropdown",
        },
      },
    {
        name: "textBlockText",
        title: "Enter text here",
        type: "array",
        of: [{ type: "block" }],
      },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
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
          ]
        }
      ],
      options: {
        layout: 'grid'
      }
    }
  ],
  preview: {
    select: {
      heading: 'Image[s] x Text',
      // media: 'image.url'
    },
    prepare() {
      return {
        title: "Image[s] x Text"
      };
    },
  },
}