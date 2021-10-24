export interface Props {
  state?: {
    store: any;
  };
  videoFile?: {
    video2: {
      url: string;
    };
    video: {
      url: string;
    };
  };
  selectVideoType?: string;
  videoUrl?: string;
  autoPlay?: any;
  type: string;
  videoSliderFile: any;
  playing: any;
  fullScreenVideoComp?: boolean;
  loaded?: any;
}
