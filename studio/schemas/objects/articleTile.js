export default {
  name: 'articleGrid',
  title: 'Article Grid',
  type: 'object',
  fields: [
    {
      name: 'gridImages',
      type: 'array',
      title: 'Grid sections',
      of: [
        { type: 'image',
          storeOriginalFilename: 'true' 
        },
      ]
    },
    {
      name: 'gridTextBlocks',
      type: 'array',
      title: 'Article text blocks',
      of: [
        { type: 'text' }
      ]
    }
  ],
  preview: {
    select: {
      // heading: 'Two Large Images',
      // media: 'image.url'
    },
    prepare() {
      return {
        title: `Image & Text Mosaic`
      };
    },
  },
}