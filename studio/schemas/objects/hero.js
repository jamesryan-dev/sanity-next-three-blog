// hero.js
import { BsPen } from "react-icons/bs";

export default {
    name: "hero",
    type: "object",
    title: "Hero",
    icon: BsPen,
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading'
      },
      {
        name: 'tagline',
        type: 'string',
        title: 'Tagline'
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
      }
    ]
  }