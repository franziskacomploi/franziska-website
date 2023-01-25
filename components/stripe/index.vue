<template>
  <div
    class="w-full bg-cadetGrey text-cultured flex flex-col items-center justify-center py-4 md:py-10"
  >
    <div class="headline-xl mt-12">{{ stripe.headline }}</div>
    <div class="content-big pt-2 px-8 md:px-20 text-center">
      {{ stripe.description }}
    </div>
    <div class="my-12">
      <nuxt-link
        to="https://www.linkedin.com/in/franziska-pendzialek/"
        class="button-gradient"
        target="_blank"
      >
        {{ stripe.cta }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import stripe from '~/content/stripe.json';
</script>
