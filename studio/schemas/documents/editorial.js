// import { BsPencilSquare } from "react-icons/bs";

// export default {
//   name: "post",
//   title: "Posts",
//   type: "document",
//   icon: BsPencilSquare,
//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//     },
//     {
//       name: "main_image",
//       title: "Main Image",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: "featured",
//       title: "Featured?",
//       type: "boolean",
//     },
//     {
//       name: "content",
//       type: "array",
//       title: "Page Sections",
//       of: [
//         { type: "breakout" },
//         { type: "articleGrid" },
//         { type: "imageRow" },
//         { type: "textBlock" },
//         { type: "fullBleedImage" },
//       ],
//     },
//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "title",
//         slugify: (input) =>
//           input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
//       },
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: "previous_post",
//       title: "Previous Post",
//       type: "reference",
//       to: { type: "post" },
//     },
//     {
//       name: "next_post",
//       title: "Next Post",
//       type: "reference",
//       to: { type: "post" },
//     },
//     {
//       name: "images_gallery",
//       title: "Images gallery",
//       type: "array",
//       of: [{ type: "image" }],
//     },
//   ],
// };
