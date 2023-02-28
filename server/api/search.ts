interface DeezerArtistData {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
  type: string;
}

export default defineEventHandler(async (event) => {
  const search = getQuery(event);
  const searchParams = search.q;
  const deezerSearchApi = "https://api.deezer.com/search/artist/?q=";
  const { data, error } = await $fetch<{
    data: DeezerArtistData[];
    error: string;
  }>(`${deezerSearchApi}${searchParams}&limit=4`);
  if (error) console.error("Error:", error); // TODO: update error handling
  return data;
});
