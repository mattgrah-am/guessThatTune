<template>
  <div class="w-full bg-neutral-100/90 p-4 shadow sm:w-96 sm:rounded-xl sm:p-8">
    <TheHeader />
    <UnplayableGame v-if="store.playableGame === false" />
    <GameOver v-if="store.trackNumber === 10" />
    <ArtistList
      v-if="
        store.playableGame === true &&
        store.tracklist.tracks.length < 10 &&
        store.trackNumber !== 10
      "
    />
    <TrackList
      v-if="
        store.playableGame === true &&
        store.tracklist.tracks.length > 1 &&
        store.trackNumber !== 10
      "
    />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { useDeezerStore } from "../stores/deezerStore";

const store = useDeezerStore();
</script>
