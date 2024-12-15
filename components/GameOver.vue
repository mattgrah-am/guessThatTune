<template>
  <div class="mb-2 flex w-full gap-3 rounded-lg bg-neutral-900 p-2 text-neutral-100">
    <img :src="artistImg" :alt="`${artist} band picture`" class="rounded h-full" />
    <div class="flex flex-col justify-between ">
      <h2 class="text-xl font-bold pb-2">
        {{ artist }}
      </h2>
      <div class="pb-1">
        <p class="text-sm">{{ response }}</p>
        <p class="text-sm">Do you want to play again?</p>
      </div>
    </div>
  </div>
  <ArtistList />
</template>

<script setup lang="ts">
import { useDeezerStore } from "../stores/deezerStore";

const store = useDeezerStore();
const score = store.score;
const artist = store.tracklist.artist;
const artistImg = store.artistImg;
const response =
  score >= 8
    ? `Outstanding! You scored ${score} out of 10.`
    : score >= 5
      ? `Great work! You scored ${score} out of 10.`
      : score > 1
        ? `Not Bad... You scored ${score} out of 10.`
        : `Unlucky... You scored ${score} out of 10.`;

store.artistList = [];
store.tracklist = {
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
};
store.gameTracks = [];
store.score = 0;
store.artistImg = undefined;
</script>
