<template>
  <div
    class="w-full flex flex-col lg:flex-row items-center justify-center gap-6 mb-4 md:my-16"
  >
    <div>
      <p class="text-2xl font-light">{{ hero.jobTitle }}</p>
      <p class="headline-xl">
        {{ hero.firstName }}
        <br />
        {{ hero.lastName }}
      </p>
    </div>
    <div
      class="w-80 h-80 rounded-full bg-charcoal shadow flex flex-row items-center justify-center"
    >
      <img
        class="w-[300px] h-[300px] rounded-full"
        loading="lazy"
        :src="heroImage"
        alt="franziska profile image"
      />
    </div>
    <div class="border-l-2">
      <p class="content-big font-light py-4 ml-4 w-72">
        {{ hero.description }}
      </p>
    </div>
  </div>

  <div
    v-if="showBanner"
    class="content-big flex flex-col md:flex-row gap-5 md:gap-4 items-center justify-evenly bg-cultured text-center pt-8 md:pt-16 px-10 md:px-auto"
  >
    <p>
      {{ hero.feature1 }}
      <br />
      <span class="font-bold">{{ hero.basedIn }}</span>
    </p>
    <p>
      {{ hero.feature2 }}
      <br />
      <span class="font-bold">{{ hero.experience }}</span>
    </p>
    <p>
      {{ hero.feature3 }}
      <br />
      <span class="font-bold">{{ hero.focusOn }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import heroImage from '~/assets/images/hero-image.jpeg';
import hero from '~/content/hero.json';

defineProps({
  showBanner: { type: Boolean, default: true },
});
</script>
