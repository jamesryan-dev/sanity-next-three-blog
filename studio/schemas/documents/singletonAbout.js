// in singletonAbout.js

export default {
  title: "Settings",
  name: "about",
  description: "Site Title, socials and meta description for when shared",
  type: "document",
  fields: [
    {
      title: "Site Title",
      name: "title",
      type: "string",
    },
    {
      title: "Site Description",
      name: "description",
      type: "string",
    },
    {
      name: 'genMetaImageL',
      type: 'image',
      title: 'Generic Meta Image (Landscape)',
      description: 'Generic safe dimension (Landscape) 1024x512px',
    },
    {
      name: 'genMetaImageP',
      type: 'image',
      title: 'Generic Meta Image (Portrait)',
      description: 'Generic safe dimension (Portrait) 800x1200px',
    },
    {
      name: 'genMetaImageFb200',
      type: 'image',
      title: 'Facebook - 200',
      description: '200x200px Image for Facebook',
    },
    {
      name: 'genMetaImageFb470',
      type: 'image',
      title: 'Facebook - 470',
      description: '470x470px Square Image for Facebook',
    },
    {
      name: 'genMetaImageFbRec',
      type: 'image',
      title: 'Facebook - 1200x630',
      description: 'Recommended image for Facebook. (Max. 8MB)',
    },
    {
      name: 'genMetaImageFbLarge',
      type: 'image',
      title: 'Facebook - 1500x1500',
      description: 'Largest image for Facebook. (Max. 5MB)',
    },

    {
      name: 'genMetaImageTwitter120',
      type: 'image',
      title: 'Twitter - 120',
      description: '120x120px Minimum size image for Twitter Summary card type',
    },

    {
      name: 'genMetaImageLi180',
      type: 'image',
      title: 'LinkedIn - 180x110',
      description: '180x110 Image for Linkedin - Do not exceed.',
    },

    {
      name: 'genMetaImageLiLarge',
      type: 'image',
      title: 'LinkedIn - 1440x880',
      description: '1440x880 HD Image for Linkedin - Untested support.',
    },

    {
      name: 'genMetaImageLiShowcase',
      type: 'image',
      title: 'LinkedIn - 442x248',
      description: '442x248px Image for Linkedin Showcase pages.',
    },

    

    

  ],
};
