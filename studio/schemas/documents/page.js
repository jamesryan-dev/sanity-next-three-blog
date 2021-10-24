// page.js

export default {
  
    // Setup a 'document' type to house the page builder field
    
    name: "page",
    type: "document",
    title: "Page",
    fields: [
      {
        name: 'pageBuilder',
        type: 'array',
        title: 'Page builder',
        of: [
          { type: 'titleText' },
          { type: 'videoSlider2' },
          { type: 'fullScreenVideo' },
          { type: 'largeImage' },
          { type: 'galleryText' },
          ]
      }
    ],
  }