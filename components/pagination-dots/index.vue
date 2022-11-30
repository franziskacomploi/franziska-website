<template>
  <div className="mt-10 flex flex-row gap-2">
    <template v-for="(item, i) in sliderItems" :key="i">
      <button
        type="button"
        :class="`rounded-full w-4 h-4 ${
          i === currentIndex ? 'bg-mint' : 'bg-dark'
        }`"
        @click="$emit('pagination', i)"
        aria-label="click"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  sliderItems: { type: Array, required: true },
  currentIndex: { type: Number, required: true },
});
</script>

<style lang="postcss" scoped></style>
