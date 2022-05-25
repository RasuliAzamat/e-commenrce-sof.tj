<template>
    <section class="pt-9 mb-24 bg-slate-200">
        <div class="container max-w-6xl px-4 ml-auto mr-8">

            <div class="flex items-center justify-between mb-12">
                <h2 class="text-danger">Хиты продаж</h2>
                <NuxtLink to="/products" class="text-2xl no-underline">
                    Cмотреть все
                </NuxtLink>
            </div>

            <swiper
                :slidesPerView="3"
                :spaceBetween="67"
                :pagination="{ clickable: true }"
                :autoplay="{ delay: 2000, disableOnInteraction: false }"
                :modules="modules"
                class="products-slider"
            >
                <swiper-slide
                    v-for="product in bestsallersProducts"
                    :key="product.id"
                >
                    <GlobalProductItem
                        :product="product"
                        class="w-full h-full"
                    />
                </swiper-slide>
            </swiper>
            
        </div>
    </section>
</template>

<script setup>
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "@/assets/css/slider/index.css";
import "@/assets/css/slider/products-slider.css";

const modules = ref([Pagination, Autoplay]);

const bestsallersProducts = ref([
    {
        id: 1,
        name: "Влажные солфетки",
        price: 20,
        img: "/img/global/product-img-1.png",
    },
    {
        id: 2,
        name: "Сухие солфетки",
        price: 25,
        img: "/img/global/product-img-2.png",
    },
    {
        id: 3,
        name: "Сухие салфетки BOX",
        price: 30,
        img: "/img/global/product-img-3.png",
    },
    {
        id: 4,
        name: "Влажные солфетки",
        price: 20,
        img: "/img/global/product-img-1.png",
    },
    {
        id: 5,
        name: "Сухие солфетки",
        price: 25,
        img: "/img/global/product-img-2.png",
    },
    {
        id: 6,
        name: "Сухие салфетки BOX",
        price: 30,
        img: "/img/global/product-img-3.png",
    },
]);
</script>

<style lang="css" scoped>
</style>