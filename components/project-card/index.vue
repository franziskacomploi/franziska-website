<template>
  <div
    class="h-full bg-white/70 flex flex-col items-center justify-center shadow-lg p-2 py-8 rounded-lg"
  >
    <div class="underline-gradient font-serif text-4xl text-center">
      {{ title }}
    </div>
    <div class="my-4">{{ emoji }}</div>
    <div class="content-big text-center font-light mb-4 mx-10">
      {{ description }}
    </div>
    <div class="flex flex-col md:flex-row gap-4 flex-wrap md:flex-nowrap">
      <a
        v-if="link"
        class="button-gradient-small"
        :href="link"
        target="_blank"
        aria-label="click"
      >
        {{ projectCard.link }}
      </a>
      <a
        v-if="codeLink"
        :href="codeLink"
        target="_blank"
        class="button-gradient-small"
        aria-label="click"
      >
        {{ projectCard.codeLink }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import projectCard from '~/content/project-card.json';

defineProps({
  title: { type: String, default: 'No title.' },
  emoji: { type: String, default: undefined },
  description: { type: String, default: 'No description.' },
  link: { type: String, default: undefined },
  codeLink: { type: String, default: undefined },
});
</script>
