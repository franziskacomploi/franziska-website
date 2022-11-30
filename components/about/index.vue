<template>
  <div class="bg-beige pt-16 md:pt-28 pb-44">
    <div class="mx-auto px-8 md:w-1/2">
      <div class="headline-xl text-center md:text-left my-4">
        {{ about.title }}
      </div>
      <div class="content-big text-center md:text-left font-light mb-4">
        {{ about.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import about from '~/content/about.json';
</script>

<style lang="postcss" scoped></style>
