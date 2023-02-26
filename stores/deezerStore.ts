import { defineStore } from "pinia";

interface ArtistLists {
  name: string | undefined;
  picture: string | undefined;
  tracklist: string | undefined;
}

interface TrackList {
  artist: string | undefined;
  playable: boolean;
  tracks: Tracks[];
}

interface Tracks {
  title: undefined;
  cover: undefined;
  preview: undefined;
  songs: string[];
}

export const useDeezerStore = defineStore("counter", () => {
  const api = `https://api.mattgrah.am`;
  const artistList = ref<ArtistLists[]>([
    {
      name: undefined,
      picture: undefined,
      tracklist: undefined,
    },
  ]);
  const tracklist = ref<TrackList>({
    artist: undefined,
    playable: false,
    tracks: [
      {
        title: undefined,
        cover: undefined,
        preview: undefined,
        songs: [],
      },
    ],
  });
  const playableGame = ref(true);
  const gameTracks = ref<Tracks[] | []>([
    {
      title: undefined,
      cover: undefined,
      preview: undefined,
      songs: [],
    },
  ]);

  const trackNumber = ref(0);
  const score = ref(0);

  const getArtistList = async (artist: string) => {
    const { data, error } = await useFetch(`${api}/search/?q=${artist}`);
    if (error.value) console.error("Error:", error.value);
    artistList.value = data.value as ArtistLists[];
  };

  const getTrackList = async (
    tracks: string | undefined,
    artist: string | undefined
  ) => {
    const { data, error } = await useFetch(
      `${api}/tracklist/?q=${tracks}&n=${artist}`
    );
    if (error.value) console.error("Error:", error.value);
    tracklist.value = data.value as TrackList;
    playableGame.value = tracklist.value.playable;
    const gameSongs: Tracks[] = [];
    const songs: string[] = [];
    let trackCounter = 10;
    while (trackCounter > 0) {
      gameSongs.push(
        ...tracklist.value.tracks.splice(
          Math.floor(Math.random() * tracklist.value.tracks.length),
          1
        )
      );
      trackCounter--;
    }
    gameSongs.forEach((track: Tracks) => songs.push(track.title!));
    trackCounter = 10;
    let songList = [...new Set(songs)];
    while (trackCounter > 0) {
      gameSongs.forEach((track: Tracks) => {
        track["songs"] = [];
        if (songList.includes(track.title!)) {
          track.songs.push(track.title!);
          songList.splice(songList.indexOf(track.title!), 1);
          while (track.songs.length < 4) {
            track.songs.push(
              songList.splice(Math.floor(Math.random() * songList.length), 1)[0]
            );
          }
          track.songs.sort(() => (Math.random() > 0.5 ? 1 : -1));
          songList = [...new Set(songs)];
        }
      });
      trackCounter--;
    }
    gameTracks.value = gameSongs;
  };

  return {
    artistList,
    tracklist,
    gameTracks,
    trackNumber,
    score,
    playableGame,
    getArtistList,
    getTrackList,
  };
});
