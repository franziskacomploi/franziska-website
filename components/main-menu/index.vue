<template>
  <nav class="md:hidden ml-6 mt-6">
    <hamburger-menu
      :active="isMenuOpen"
      @click="handleClick"
      aria-haspopup="menu"
    />
  </nav>

  <div v-if="isMenuOpen" class="md:hidden bg-white flex flex-col items-center">
    <nuxt-link
      to="/"
      :class="`${isActive('index') ? 'underline-gradient' : ''} my-2`"
    >
      About Fran
    </nuxt-link>
    <nuxt-link
      to="/contact"
      :class="`${isActive('contact') ? 'underline-gradient' : ''} my-2`"
    >
      Contact Me
    </nuxt-link>
  </div>

  <nav
    class="hidden md:flex flex-row items-center justify-evenly font-bold text-xl my-4"
  >
    <nuxt-link to="/" class="relative">
      <span :class="`${isActive('index') ? 'active' : 'not-active'}`">
        About Franziska
      </span>
    </nuxt-link>
    <nuxt-link to="/contact" class="relative"
      ><span :class="`${isActive('contact') ? 'active' : 'not-active'}`">
        Contact me
      </span></nuxt-link
    >
  </nav>
</template>

<script lang="ts" setup>
const isMenuOpen = ref<boolean>(false);

const handleClick = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const route = useRoute();

const isActive = (item: string): boolean => {
  return Boolean(route.name === item);
};
</script>

<style lang="scss" scoped>
.active {
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(90deg, #8197a0, #1d3e49);
    content: '';
  }
}

.not-active {
  &:after {
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 3px;
    width: 0;
    background: linear-gradient(90deg, #8197a0, #1d3e49);
    transition: left 256ms ease-in-out, width 256ms ease-in-out;
    content: '';
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
}
</style>
