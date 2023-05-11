<template>
  <div
    class="bg-cultured text-charcoal pt-4 md:pt-10 pb-4 md:pb-32 flex flex-col items-center"
  >
    <div class="headline-xl text-center mb-4 mt-8 md:mt-24">
      {{ projectData.title }}
    </div>
    <div class="content-big text-center font-light mb-4 mx-6 md:mx-28">
      {{ projectData.description }}
    </div>
    <div
      class="w-full flex flex-col items-center mt-12 md:mt-20 px-8 md:px-20 xl:px-72"
    >
      <div class="w-full flex flex-row items-center justify-center">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="10"
          :pagination="true"
        >
          <swiper-slide v-for="(project, i) in projectData.projects" :key="i">
            <project-card
              :title="project.title"
              :emoji="project.emoji"
              :description="project.description"
              :link="project.link"
              :codeLink="project.codeLink"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import projectData from '~/content/projects.json';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination];
</script>

<style lang="scss" scoped>
:deep(.swiper-pagination) {
  @apply mt-6 flex flex-row gap-2 justify-center relative;
}
:deep(.swiper-pagination-bullet) {
  @apply rounded-full w-4 h-4 bg-cadetGrey;
}
:deep(.swiper-pagination-bullet-active) {
  @apply bg-camel;
}
:deep(.swiper-slide) {
  @apply h-auto;
}
</style>
