<template>
  <div class="app grid place-items-center">
    <div
      class="w-full bg-neutral-100/90 p-4 shadow sm:w-96 sm:rounded-xl sm:p-8"
    >
      <div class="grid place-items-center">
        <h1
          class="pb-2 text-center text-5xl uppercase tracking-tight font-['VT323'] text-shadow-md"
        >
          <a href="/"> Guess that Tune!</a>
        </h1>
      </div>
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

      <div></div>
      <div class="mt-2 flex items-center justify-center text-xs">
        Created with 🖤 by&nbsp;
        <a
          href="https://www.matg.dev"
          target="_blank"
          rel="noreferrer"
          class="text-neutral-500 hover:underline hover:underline-offset-2"
        >
          matg.dev
        </a>
        &nbsp;using&nbsp;
        <a
          href="https://developers.deezer.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img class="w-14" src="./assets/img/deezer.png" alt="Deezer" />
        </a>
        <sup>&nbsp;API</sup>
      </div>
      <button
        id="show-modal"
        class="w-full text-xs text-neutral-500 hover:underline hover:underline-offset-2"
        @click="showModal = true"
      >
        Learn more about this web app.
      </button>

      <Teleport to="body">
        <AboutModal :show="showModal" @close="showModal = false" />
      </Teleport>
    </div>
  </div>
  <button>test</button>
</template>

<script setup lang="ts">
import { useDeezerStore } from './stores/deezerStore';

const store = useDeezerStore();
const showModal = ref(false);
</script>
