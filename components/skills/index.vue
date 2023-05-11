<template>
  <div class="gradient flex flex-col items-center pb-8 md:pb-16">
    <div class="flex flex-col md:flex-row gap-4 -mt-28">
      <div class="fade-in card max-w-2xl text-center font-light pb-10">
        <div class="my-4">💡</div>
        <div class="font-bold mb-2">{{ skills.subTitle1 }}</div>
        <template v-for="(item, i) in skills.skills1" :key="i">
          <div>{{ item }}</div>
        </template>
      </div>
      <div class="fade-in card max-w-2xl text-center font-light pb-10">
        <div class="my-4">👩‍💻</div>
        <div class="font-bold mb-2">{{ skills.subTitle2 }}</div>
        <template v-for="(item, i) in skills.skills2" :key="i">
          <div>{{ item }}</div>
        </template>
      </div>
      <div class="fade-in card max-w-2xl text-center font-light pb-10">
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

let fadeInElements = ref<HTMLElement[]>([]);

const isElemVisible = (el: any) => {
  let rect = el.getBoundingClientRect();
  let elemTop = rect.top + 200; // 200 = buffer
  let elemBottom = rect.bottom;
  return elemTop < window.innerHeight && elemBottom >= 0;
};

const handleScroll = () => {
  for (let i = 0; i < fadeInElements.value.length; i++) {
    let item = fadeInElements.value[i];
    if (isElemVisible(item)) {
      item.style.opacity = '1';
      item.style.transform = 'scale(1)';
      fadeInElements.value.splice(i, 1);
    }
  }
};

onMounted(() => {
  fadeInElements.value = Array.from(
    document.getElementsByClassName('fade-in')
  ) as HTMLElement[];
  document.addEventListener('scroll', handleScroll);

  handleScroll();
});

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.card {
  @apply bg-white md:w-1/2 p-4  shadow
  flex flex-col items-center rounded-lg;
}

.fade-in {
  opacity: 0;
  transition: 0.5s all ease-in-out;
  transform: scale(0.8);
}
</style>
