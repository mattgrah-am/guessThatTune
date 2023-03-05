<template>
  <AudioPlayer
    :preview="songs[store.trackNumber].preview"
    :cover="songs[store.trackNumber].cover"
    :index="store.trackNumber"
    :clicked="clicked"
  />
  <div v-for="song in songs[store.trackNumber].songs">
    <button
      @click="nextSong(song)"
      class="mb-2 w-full rounded border border-neutral-400 bg-neutral-100 px-2 py-1 text-neutral-700 hover:bg-neutral-400/50 disabled:bg-transparent disabled:text-neutral-400"
      :class="
        clicked === true && song === store.gameTracks[store.trackNumber].title
          ? '!border-green-600 !bg-green-200/50 !text-green-600'
          : clicked && selectedSong === song
          ? '!border-red-500 !bg-red-200/50 !text-red-600'
          : 'bg-neutral-100 text-neutral-700'
      "
      :disabled="clicked"
    >
      {{ song }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDeezerStore } from "../stores/deezerStore";

const store = useDeezerStore();
const songs = store.gameTracks;
const correctSong = ref<string | undefined>("");
const selectedSong = ref<string | undefined>("");
const clicked = ref(false);

const nextSong = (song: string) => {
  correctSong.value = store.gameTracks[store.trackNumber].title;
  selectedSong.value = song;
  clicked.value = true;
  correctSong.value === selectedSong.value ? store.score++ : store.score--;
  setTimeout(() => {
    store.trackNumber++;
    clicked.value = false;
  }, 3000);
};
</script>
