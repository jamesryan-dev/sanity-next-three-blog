// textWithIllustration.js
import {RiImageAddFill} from 'react-icons/ri'

export default {
    type: "object",
    name: "largeImage",
    title: "Large Image",
    icon: RiImageAddFill,
    fields: [
      {
        title: "Fit/Stretch Image to fill space?",
        name: "selectFitToWindow",
        type: "boolean", 
      },
      {
        name: 'largeImageTitle',
        type: 'string',
        title: 'Title'
      },
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
      },
      
    ],
    preview: {
        select: {
          heading: 'Large Image',
          // media: 'image.url'
        },
        prepare() {
          return {
            title: `Large Image`
          };
        },
      },
  }
