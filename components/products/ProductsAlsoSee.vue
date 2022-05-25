<template>
    <div class="mb-28">
        <h3 class="mb-9">С этим товаром смотрят</h3>

        <swiper
            :slidesPerView="5"
            :spaceBetween="70"
            :freeMode="true"
            :modules="modules"
            class="products-also-see-slider"
        >
            <swiper-slide v-for="{ id, name, img, price } in productsAlsoSee" :key="id" >
                <NuxtLink :to="`/products/${id}`">
                    <div class="flex flex-col">
                        <img
                            :src="img"
                            :alt="name"
                            class="my-5"
                            style="filter: drop-shadow(3px 3px 15px rgba(0, 0, 0, 0.15));"
                        />
                        <div class="text-xl">
                            <p>{{ name }}</p>
                            <small class="text-yellow-800">
                                {{ toCorrectCurrency(price) }} смн
                            </small>
                        </div>
                    </div>
                </NuxtLink>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/free-mode";
import "@/assets/css/slider/index.css";

const modules = ref([FreeMode]);

const productsAlsoSee = ref([
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
        name: "Влажные солфетки",
        price: 20,
        img: "/img/global/product-img-1.png",
    },
    {
        id: 7,
        name: "Сухие солфетки",
        price: 25,
        img: "/img/global/product-img-2.png",
    },
    {
        id: 8,
        name: "Сухие салфетки BOX",
        price: 30,
        img: "/img/global/product-img-3.png",
    },
    {
        id: 9,
        name: "Влажные солфетки",
        price: 20,
        img: "/img/global/product-img-1.png",
    },
    {
        id: 10,
        name: "Сухие солфетки",
        price: 25,
        img: "/img/global/product-img-2.png",
    },
]);

const toCorrectCurrency = (price) => {
    return price
        .toLocaleString(undefined, { minimumFractionDigits: 2 })
        .replace(".", ",");
};
</script>

<style lang="scss" scoped>
</style>