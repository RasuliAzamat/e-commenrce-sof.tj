<template>
  <section class="container max-w-6xl ml-auto px-4 lg:px-8">
    <div class="mb-8 sm:flex sm:items-center sm:justify-between">
      <h2 class="text-danger">Хиты продаж</h2>
      <NuxtLink to="/products" class="hidden text-2xl no-underline sm:inline-block">
        Cмотреть все
      </NuxtLink>
    </div>

    <swiper
      :modules="modules"
      :slidesPerView="1.5"
      :spaceBetween="67"
      :pagination="{clickable: true}"
      :breakpoints="{768: {slidesPerView: 3}}"
      :autoplay="{delay: 2000, disableOnInteraction: false}"
      class="products-slider"
    >
      <swiper-slide v-for="product in lastAddedProducts" :key="product.id">
        <GlobalProductItem class="w-72 h-full md:w-full" :product="product" />
      </swiper-slide>
    </swiper>

    <div class="block sm:hidden text-center pb-20">
      <NuxtLink to="/products" class="text-2xl no-underline"> Cмотреть все </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import {Pagination, Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import '@/assets/css/slider/index.css'
import '@/assets/css/slider/products-slider.css'

const modules = ref([Pagination, Autoplay])

const lastAddedProducts = ref([
  {
    id: 1,
    name: 'Влажные солфетки',
    price: 20,
    img: '/img/global/product-img-1.png',
  },
  {
    id: 2,
    name: 'Сухие солфетки',
    price: 25,
    img: '/img/global/product-img-2.png',
  },
  {
    id: 3,
    name: 'Сухие салфетки BOX',
    price: 30,
    img: '/img/global/product-img-3.png',
  },
  {
    id: 4,
    name: 'Влажные солфетки',
    price: 20,
    img: '/img/global/product-img-1.png',
  },
  {
    id: 5,
    name: 'Сухие солфетки',
    price: 25,
    img: '/img/global/product-img-2.png',
  },
  {
    id: 6,
    name: 'Сухие салфетки BOX',
    price: 30,
    img: '/img/global/product-img-3.png',
  },
])
</script>

<style lang="css" scoped></style>
