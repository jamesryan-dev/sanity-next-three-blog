import sanityClient from "@sanity/client";

/**
 * So we use this whenever we want to get data from the backend.
 * In our case it will be stuff like artists, events, news
 *
 * Just import into what ever module you need it in.
 */
export default sanityClient({
  projectId: "gl0zhuej", // you can find this in sanity.json
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});
