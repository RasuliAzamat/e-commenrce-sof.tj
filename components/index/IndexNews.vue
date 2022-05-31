<template>
  <section class="mb-12 px-4 lg:px-8">
    <h2 class="mb-9 text-danger">Акции и новости</h2>

    <div class="flex flex-col font-bold text-2xl text-white md:flex-row lg:text-3xl">
      <div
        v-for="{id, title, img} in news"
        :key="id"
        class="news w-full h-32 mr-3 mb-5 last:mr-0 rounded-lg md:flex-1 md:mb-0 md:h-48"
        :style="`background-image: url(${img});`"
      >
        <p class="absolute top-1/3 sm:top-2/3 ml-3 z-10">{{ title }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const news = ref([
  {
    id: 1,
    title: 'Новое поступления товаров',
    img: '/img/index/index-img-1.png',
  },
  {
    id: 2,
    title: 'Скидки на влажные салфетки',
    img: '/img/index/index-img-2.png',
  },
])
</script>

<style lang="css" scoped>
.news {
  position: relative;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.news::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;

  width: 90%;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .news::before {
    width: 100%;
  }
}
</style>
