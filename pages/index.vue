<template>
  <div>
    <hero showBanner />
    <about />
    <skills />
    <div class="flex flex-row justify-center mt-4 md:mt-12">
      <nuxt-link
        to="https://www.linkedin.com/in/franziska-pendzialek/"
        class="button-gradient my-4"
      >
        See my Experiences
      </nuxt-link>
    </div>
    <projects />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'main' });
</script>

<style lang="postcss" scoped></style>
