export default {
  name: 'breakout',
  title: 'Breakout',
  type: 'object',
  fields: [
    {
      title: "Content",
      name: "content",
      type: "string"
    },
    {
      title: "width",
      name: "width",
      type: "string",
    }
  ],
  preview: {
    select: {
      // heading: 'Two Large Images',
      // media: 'image.url'
    },
    prepare() {
      return {
        title: `Large Text Breakout`
      };
    },
  },
}