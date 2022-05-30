<template>
  <section class="slider-wrapper mb-12 px-4 lg:px-8">
    <swiper
      :modules="modules"
      :pagination="{clickable: true}"
      :autoplay="{delay: 3000, disableOnInteraction: false}"
      class="main-slider"
    >
      <swiper-slide v-for="{id, img} in slides" :key="id" class="rounded-xl">
        <img :src="img" alt="Картинка слайдера" />
      </swiper-slide>
    </swiper>

    <div class="image-1">
      <img
        class="w-full h-full object-cover rounded-xl"
        src="/img/index/index-img-1.png"
        alt="Сухие салфетки"
      />
    </div>
    <div class="image-2">
      <img
        class="w-full h-full object-cover rounded-xl"
        src="/img/index/index-img-2.png"
        alt="Влажные салфетки"
      />
    </div>
  </section>
</template>

<script setup>
import {Pagination, Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import '@/assets/css/slider/index.css'
import '@/assets/css/slider/main-slider.css'

const modules = ref([Pagination, Autoplay])

const slides = ref([
  {id: 1, img: '/img/index/slider/slider-img-1.png'},
  {id: 2, img: '/img/index/slider/slider-img-1.png'},
  {id: 3, img: '/img/index/slider/slider-img-1.png'},
  {id: 4, img: '/img/index/slider/slider-img-1.png'},
  {id: 5, img: '/img/index/slider/slider-img-1.png'},
])
</script>

<style lang="css" scoped>
.slider-wrapper {
  display: grid;
  grid-template-columns: 1fr 0.8fr 1.2fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    'slider slider image-1'
    'slider slider image-2';
}

@media (min-width: 1024px) {
  .slider-wrapper {
    gap: 20px 20px;
  }
}

@media (max-width: 425px) {
  .slider-wrapper {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'slider slider'
      'image-1 image-2';
  }
}

.main-slider {
  grid-area: slider;
}

.image-1 {
  grid-area: image-1;
}

.image-2 {
  grid-area: image-2;
}
</style>
