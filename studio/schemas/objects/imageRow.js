// This is for a full width 2 column image component
// TODO make it max to 2 images
export default {
  name: 'imageRow',
  title: 'Dual Image',
  type: 'object',
  fields: [
    {
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'imageWithAlt'
        }
      ]
    }
  ],
  preview: {
    select: {
      heading: 'Two Large Images',
      // media: 'image.url'
    },
    prepare({ heading, media }) {
      return {
        title: `Dual Image`,
        // media,
      };
    },
  }
}