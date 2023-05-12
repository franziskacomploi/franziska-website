<template>
  <button v-if="active" :disabled="!active" type="button" aria-label="click">
    <component class="w-[20px] h-[20px]" :is="arrowLeft" alt="menu" />
  </button>
  <button v-else :disabled="active" type="button" aria-label="click">
    <component
      class="w-[40px] h-[40px]"
      :is="hamburgerIcon"
      alt="hamburger icon"
    />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  active: { type: Boolean, default: false },
});

const hamburgerIcon = computed(() => {
  return defineAsyncComponent(() => import(`~/assets/icons/hamburger.svg`));
});

const arrowLeft = computed(() => {
  return defineAsyncComponent(() => import(`~/assets/icons/arrow-left.svg`));
});
</script>
