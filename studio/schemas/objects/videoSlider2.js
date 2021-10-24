// page.js
import {IoMdImages} from 'react-icons/io'
export default {

    // Setup a 'document' type to house the page builder field
    name: "videoSlider2",
    type: "object",
    icon: IoMdImages,
    title: "Slider w/ Text or Content x Text",
    fields: [
        {
            name: "videoSlider2Title",
            title: "Title",
            type: "string",
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
        name: 'videoSliderBuilder',
        type: 'array',
        title: 'Slider builder',
        of: [
          { type: 'videoSlider' }
          ]
      },
    ],
    preview: {
      select: {
        title: 'videoSlider2Title',
      }
    }
  }