<template>
  <footer
    :class="`${
      isContactPage ? 'relative md:fixed md:bottom-0 w-full' : ''
    } bg-raisinBlack flex flex-col items-center justify-center text-white pt-10 pb-2`"
  >
    <div class="flex flex-row items-center justify-center gap-4">
      <a
        href="https://www.linkedin.com/in/franziska-pendzialek/"
        target="_blank"
      >
        <span class="visuallyhidden">Franziska on Linkedin</span>
        <component :is="linkedinSVG" alt="linkedin icon" />
      </a>
      <a href="https://github.com/franziskapendzialek" target="_blank">
        <span class="visuallyhidden">Franziska on Github</span>
        <component :is="githubSVG" alt="github icon" />
      </a>
    </div>
    <nuxt-link to="/imprint" class="underline-gradient mt-4 my-2">
      Imprint
    </nuxt-link>

    <div class="text-sm mt-6">{{ footer.copyright }}</div>
  </footer>
</template>

<script lang="ts" setup>
import footer from '~/content/footer.json';

const linkedinSVG = computed(() => {
  return defineAsyncComponent(() => import(`~/assets/icons/linkedin.svg`));
});

const githubSVG = computed(() => {
  return defineAsyncComponent(() => import(`~/assets/icons/github.svg`));
});

const isContactPage = computed(() => {
  const route = useRouter();
  return route.currentRoute.value.name === 'contact' || false;
});
</script>
