<template>
  <div>
    <p class="pb-4 text-sm">
      Unfortunately <strong>{{ artist }} </strong> does not have enough preview
      tracks to play this game, please search for different artist or band.
    </p>
    <ArtistList />
  </div>
</template>

<script setup lang="ts">
import { useDeezerStore } from "../stores/deezerStore";

const store = useDeezerStore();
const artist = ref<string | undefined>("");

onMounted(() => {
  artist.value = store.tracklist.artist;
  store.artistList = [];
});
</script>
