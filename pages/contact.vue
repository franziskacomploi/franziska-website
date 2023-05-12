<template>
  <div>
    <hero :show-banner="false" />
    <div class="flex flex-col items-center h-[200px] md:h-[400px] gradient">
      <div class="mt-12 py-2 px-4 text-lg text-white border-2 rounded-full">
        <a
          href="https://www.linkedin.com/in/franziska-pendzialek/"
          target="_blank"
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
