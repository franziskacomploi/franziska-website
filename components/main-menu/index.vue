<template>
  <nav class="md:hidden ml-6 mt-6">
    <hamburger-menu :active="isMenuOpen" @click="handleClick" />
  </nav>

  <div v-if="isMenuOpen" class="md:hidden bg-white flex flex-col items-center">
    <nuxt-link to="/" class="underline-gradient my-2"> About Fran </nuxt-link>
    <nuxt-link to="/contact" class="underline-gradient my-2">
      Contact Me
    </nuxt-link>
  </div>

  <nav
    class="hidden md:flex flex-row items-center justify-evenly font-bold text-xl my-4"
  >
    <nuxt-link to="/" class="underline-gradient"> About Fran </nuxt-link>
    <nuxt-link to="/contact" class="underline-gradient"> Contact Me </nuxt-link>
  </nav>
</template>

<script lang="ts" setup>
const isMenuOpen = ref<boolean>(false);

const handleClick = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="postcss" scoped></style>
