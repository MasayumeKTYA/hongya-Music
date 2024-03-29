declare interface JavaFilePath {
  name: string;
  fullPath: string;
  isFile: boolean;
  isCreateImg?: boolean;
  author?: string;
  pic?: string;
  time?: number;
  type?: string;
  album?: string;
  MP3Title?: string;
}
declare interface storeSong {
  currentIndex: number;
  myAppRoot: string;
  songList: JavaFilePath[];
  innerAudioContext: UniApp.InnerAudioContext;
  currentSong: JavaFilePath;
  transitionAllBox: boolean;
  playBtn: boolean;
  transitionBtn: boolean;
  popup1: boolean;
  startTime: string;
  endTime: string;
  currentTime: number;
  setIntervalData: number;
  lineWidth: number;
  setTimeoutDebound: boolean;
}

declare interface PropsSong {
  list: JavaFilePath[];
}
declare interface silder {
  detail: {
    value: number;
  };
}
