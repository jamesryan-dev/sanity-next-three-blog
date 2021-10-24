export interface Props {
  overlayBackgroundColor: string;
  buttonTextContent: string;
  overlayBackgroundImage: unknown;
  buttonTextColor: string;
  loadingScreenChoice: string;
  loadingScreenTitle: string;
  loadingScreenDescription: string;
  type: string;
  selectThreeDModel: string;
  videoFile: {
    video2: {
      url: string;
    };
    video: {
      url: string;
    };
  };
  selectVideoType: string;
  videoUrl: string;
  fullScreenVideoComp?: boolean;
}
