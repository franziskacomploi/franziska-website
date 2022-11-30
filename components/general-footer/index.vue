<template>
  <div class="bg-dark text-center text-white py-10">
    <div class="flex flex-row items-center justify-center gap-4">
      <a href="https://www.linkedin.com/in/franziska-pendzialek/" rel="_blank">
        <component :is="linkedinSVG" />
      </a>
      <a href="https://github.com/franziskapendzialek" rel="_blank">
        <component :is="githubSVG" />
      </a>
    </div>
    <div class="mt-4">
      <nuxt-link to="/imprint" class="underline-gradient my-2">
        Imprint
      </nuxt-link>
    </div>

    <div class="mt-4">{{ footer.copyright }}</div>
  </div>
</template>

<script lang="ts" setup>
import footer from '~/content/footer.json';

const linkedinSVG = computed(() => {
  return defineAsyncComponent(() => import(`~/assets/icons/linkedin.svg`));
});

const githubSVG = computed(() => {
  return defineAsyncComponent(() => import(`~/assets/icons/github.svg`));
});
</script>

<style lang="postcss" scoped></style>
