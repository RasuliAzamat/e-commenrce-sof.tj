<template>
  <section class="container max-w-6xl ml-auto mb-24 px-4 lg:px-8">
    <h2 class="mb-5 text-danger">Отзывы</h2>

    <swiper
      :modules="modules"
      :spaceBetween="52"
      :slidesPerView="1.5"
      :breakpoints="{768: {slidesPerView: 2}}"
      :autoplay="{delay: 3000, disableOnInteraction: false}"
      class="reviews-slider"
    >
      <swiper-slide v-for="{id, author, text, date} in reviews" :key="id">
        <div class="mr-12 last:mr-0">
          <h3 class="text-primary">{{ author }}</h3>
          <small class="inline-block">{{ date }}</small>
          <p class="text-xs">{{ text }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import {Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'

import 'swiper/css'
import '@/assets/css/slider/index.css'

const modules = ref([Autoplay])

const reviews = ref([
  {
    id: 1,
    author: 'Муминшо Муминов',
    text: "Obsession with producing superior product is matched only by your. Thank you for the excellent customers service and attention. The fabrics are superchic, probably the best ones I've ever held in my hands.",
    date: '10.04.22',
    // date: new Date(Date.now()).toLocaleDateString('ru-RU'),
  },
  {
    id: 2,
    author: 'Парвина Ашрафова',
    text: "Obsession with producing superior product is matched only by your. Thank you for the excellent customers service and attention. The fabrics are superchic, probably the best ones I've ever held in my hands.",
    date: '1.03.22',
    // date: new Date(Date.now()).toLocaleDateString("ru-RU"),
  },
  {
    id: 3,
    author: 'Муминшо Муминов',
    text: "Obsession with producing superior product is matched only by your. Thank you for the excellent customers service and attention. The fabrics are superchic, probably the best ones I've ever held in my hands.",
    date: '10.04.22',
    // date: new Date(Date.now()).toLocaleDateString('ru-RU'),
  },
  {
    id: 4,
    author: 'Парвина Ашрафова',
    text: "Obsession with producing superior product is matched only by your. Thank you for the excellent customers service and attention. The fabrics are superchic, probably the best ones I've ever held in my hands.",
    date: '1.03.22',
    // date: new Date(Date.now()).toLocaleDateString("ru-RU"),
  },
])
</script>

<style lang="scss" scoped></style>
