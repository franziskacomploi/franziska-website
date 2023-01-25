<template>
  <div class="gradient flex flex-col items-center pb-8 md:pb-16">
    <div class="flex flex-col md:flex-row gap-4 -mt-28">
      <div class="card max-w-2xl text-center font-light pb-10">
        <div class="my-4">💡</div>
        <div class="font-bold mb-2">{{ skills.subTitle1 }}</div>
        <template v-for="(item, i) in skills.skills1" :key="i">
          <div>{{ item }}</div>
        </template>
      </div>
      <div class="card max-w-2xl text-center font-light pb-10">
        <div class="my-4">👩‍💻</div>
        <div class="font-bold mb-2">{{ skills.subTitle2 }}</div>
        <template v-for="(item, i) in skills.skills2" :key="i">
          <div>{{ item }}</div>
        </template>
      </div>
      <div class="card max-w-2xl text-center font-light pb-10">
        <div class="my-4"> ☕️</div>
        <div class="font-bold mb-2">{{ skills.subTitle3 }}</div>
        <template v-for="(item, i) in skills.skills3" :key="i">
          <div>{{ item }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import skills from '~/content/skills.json';
</script>

<style lang="scss" scoped>
.card {
  @apply bg-white md:w-1/2 p-4  shadow
  flex flex-col items-center;
}
</style>
