<template>
  <div>
    <Hero />
    <div class="flex flex-col items-center py-28 gradient">
      <div class="p-2 text-white border-2">
        <a
          href="https://www.linkedin.com/in/franziska-pendzialek/"
          rel="_blank"
        >
          {{ contact.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import contact from '~/content/contact.json';

definePageMeta({ layout: 'main' });
</script>

<style lang="postcss" scoped></style>
