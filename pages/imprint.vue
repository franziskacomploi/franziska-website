<template>
  <div class="bg-raisinBlack text-center text-white py-10">
    <p>{{ imprint.text }}</p>
  </div>
</template>

<script lang="ts" setup>
import imprint from '~/content/imprint.json';

definePageMeta({ layout: 'main' });
</script>
