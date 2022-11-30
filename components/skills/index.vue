<template>
  <div class="gradient flex flex-col items-center pb-8 md:pb-16">
    <div class="card max-w-2xl -mt-28 content-big text-center font-light pb-10">
      <div class="mt-6">
        <img
          class="w-[40px] h-[40px]"
          :src="linksIcon"
          alt="skills-franziska"
        />
      </div>
      <div class="font-bold mb-2">{{ skills.subTitle1 }}</div>
      <template v-for="(item, i) in skills.skills1" :key="i">
        <div>{{ item }}</div>
      </template>
      <div class="mb-2 mt-10">
        <img
          class="w-[30px] h-[30px]"
          :src="contentIcons"
          alt="skills-franziska"
        />
      </div>
      <div class="font-bold mb-2">{{ skills.subTitle2 }}</div>
      <template v-for="(item, i) in skills.skills2" :key="i">
        <div>{{ item }}</div>
      </template>
      <div class="mb-2 mt-10">
        <img
          class="w-[40px] h-[40px]"
          :src="skillsIcon"
          alt="skills-franziska"
        />
      </div>
      <div class="font-bold mb-2">{{ skills.subTitle3 }}</div>
      <template v-for="(item, i) in skills.skills3" :key="i">
        <div>{{ item }}</div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import skills from '~/content/skills.json';
import linksIcon from '~/assets/images/links.png';
import contentIcons from '~/assets/images/content.png';
import skillsIcon from '~/assets/images/skills.png';
</script>

<style lang="postcss" scoped>
.card {
  @apply bg-white md:w-1/2 p-4 
  rounded-2xl shadow
  flex flex-col items-center;
}
</style>
