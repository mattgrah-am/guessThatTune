<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div
          class="modal-container w-screen bg-neutral-100/90 p-4 shadow sm:w-[440px] sm:rounded-lg">
          <h3
            class="header py-4 text-center text-5xl font-bold uppercase tracking-tight">
            Guess that Tune!
          </h3>
          <p class="text-sm">
            Originally created as part of
            <a
              href="https://generalassemb.ly/education/software-engineering-immersive-remote-flex"
              target="_blank"
              rel="noreferrer"
              class="text-neutral-500 hover:underline hover:underline-offset-2">
              General Assembly's Software Engineering Immersive Online (Flex)
            </a>
            course's final project using React, Express and Node JS, this
            project was overhauled and now uses&nbsp;
            <span v-for="link in websiteLinks">
              <a
                class="text-sm text-neutral-500 hover:underline hover:underline-offset-2"
                :href="link.url"
                target="_blank"
                rel="noreferrer">
                {{ link.name }},
              </a>
            </span>
            & the
            <a
              href="https://developers.deezer.com/"
              target="_blank"
              rel="noreferrer"
              underline="hover">
              <img
                src="~/assets/img/deezer.png"
                alt="Deezer"
                class="inline w-16" />
              API.
            </a>
            You can learn more and review the full source code on
            <a
              href="https://github.com/mattgrah-am/guessThatTune"
              target="_blank"
              rel="noreferrer"
              underline="hover"
              class="text-neutral-500 hover:underline hover:underline-offset-2">
              Github
            </a>
            .
          </p>
          <p class="pt-2 text-sm">
            The aim of the game is to allow the end user to search for a artist
            / band, which in turn generates a set of multiple choice questions
            where the end user is to guess the song whilst a short 30sec music
            clip is played. If the user guesses correctly the name of the song
            is highlighted green, if the user selects incorrectly the name of
            the selected guess is highlighted red.
          </p>

          <button
            class="m-auto mt-4 flex rounded bg-neutral-500 px-8 py-2 text-sm font-bold uppercase text-neutral-100 hover:bg-neutral-900"
            @click="$emit('close')">
            Close
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps({
  show: Boolean,
});

const websiteLinks = [
  {
    name: "Nuxt 3",
    url: "https://nuxt.com/",
  },
  {
    name: "Typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Pinia",
    url: "https://pinia.vuejs.org/",
  },
  {
    name: "Cloudflare Pages",
    url: "https://pages.cloudflare.com/",
  },
];

const authorLinks = [
  {
    name: "Website",
    url: "https://www.matg.dev",
  },
  {
    name: "Github",
    url: "https://github.com/mattgrah-am",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/mattgrah_am",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mattgrah-am/",
  },
];
</script>
