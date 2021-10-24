import groq from "groq";

export const getPageBuilder = groq`
  *[ _type == "page" ]
`;

export const getIndex = groq`
  *[]
`;

export const getLoading = groq`
  *[ _type == "loadingScreen" ]
`;

export const getLanding = groq`
  *[ _type == "video" ] {
    "videoTitle": videoTitle,
    "videoDescription": videoDescription,
    "selectVideoType": selectVideoType,
    "videoUrl": videoUrl,
    "video2": video2.asset->{
      ...,
    },
    "video": video.asset-> {
      ...,
    },
    "backgroundImage":backgroundImage.asset->url,
    "selectSVG":selectSVG,
    "backgroundSVG": backgroundSVG.asset->url
  }
`;

export const getVideoFile = groq`
  *[_type == "loadingScreen"]{
       
        "video2": video2.asset->{
          ...,
        },
        "video": video.asset-> {
          ...,
        }
    } 
`;

export const getSettings = groq`
  *[_type == "about"]{
    "title": title,
    "description": description,
  }
`;
