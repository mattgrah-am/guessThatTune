interface DeezerTrackData {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  contributors: object;
  md5_image: string;
  artist: object;
  album: {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string;
  };
  type: string;
}

export default defineEventHandler(async (event) => {
  const search = getQuery(event);
  const trackAPI = search.q;
  const artist = search.n;
  let playable = true;
  let error = "";
  const tracks: any = [];
  const { data, responseError } = await $fetch<{
    data: DeezerTrackData[];
    responseError: string;
  }>(`${trackAPI}`);
  if (error) console.error("Error:", responseError); // TODO: update error handling
  if (data.length < 10) playable = false;
  else {
    data.forEach((track) => {
      if (track.preview) {
        tracks.push({
          title: track.title,
          cover: track.album.cover_big,
          preview: track.preview,
        });
      }
    });
  }

  return { artist, playable, error, tracks };
});
