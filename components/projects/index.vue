<template>
  <div class="gradient pt-8 md:pt-16 pb-8 md:pb-44 flex flex-col items-center">
    <div class="headline-xl text-beige text-center mb-4 mt-8 md:mt-24">
      {{ projectData.title }}
    </div>
    <div
      class="text-beige content-big text-center font-light mb-4 mx-6 md:mx-28"
    >
      {{ projectData.description }}
    </div>
    <div
      class="w-full flex flex-col items-center mt-12 md:mt-20 px-8 md:px-20 xl:px-72"
    >
      <div class="w-full flex flex-row items-center justify-center">
        <template v-for="(project, i) in projectData.projects" :key="i">
          <project-card
            :active="i === currentIndex"
            :title="project.title"
            :emoji="project.emoji"
            :description="project.description"
            :link="project.link"
            :codeLink="project.codeLink"
          />
        </template>
      </div>
      <pagination-dots
        :sliderItems="projectData.projects"
        :currentIndex="currentIndex"
        @pagination="handlePaginationClick"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import projectData from '~/content/projects.json';

const currentIndex = ref<number>(0);

const handlePaginationClick = (i: number) => {
  currentIndex.value = i;
};
</script>

<style lang="postcss" scoped></style>
