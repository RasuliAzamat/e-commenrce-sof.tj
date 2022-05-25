<template>
    <section id="wrapper" class="px-8 mb-12">
        <swiper
            :modules="modules"
            :pagination="{ clickable: true, }"
            :autoplay="{ delay: 3000, disableOnInteraction: false, }"
            class="main-slider"
            id="slider"
        >
            <swiper-slide v-for="{ id, img } in slides" :key="id">
                <img :src="img" alt="Картинка слайдера" />
            </swiper-slide>
        </swiper>

        <div id="img-1">
            <img
                class="w-full h-full object-cover rounded-xl"
                src="/img/index/index-img-1.png"
                alt="Сухие салфетки"
            />
        </div>
        <div id="img-2">
            <img
                class="w-full h-full object-cover rounded-xl"
                src="/img/index/index-img-2.png"
                alt="Влажные салфетки"
            />
        </div>
    </section>
</template>

<script setup>
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "@/assets/css/slider/index.css";
import "@/assets/css/slider/main-slider.css";

const modules = ref([Pagination, Autoplay]);

const slides = ref([
    { id: 1, img: "/img/index/slider/slider-img-1.png" },
    { id: 2, img: "/img/index/slider/slider-img-1.png" },
    { id: 3, img: "/img/index/slider/slider-img-1.png" },
    { id: 4, img: "/img/index/slider/slider-img-1.png" },
    { id: 5, img: "/img/index/slider/slider-img-1.png" },
]);
</script>

<style lang="css" scoped>
#wrapper {
    display: grid;
    grid-template-columns: 1fr 0.8fr 1.2fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 20px;
    grid-template-areas:
        "slider slider image-1"
        "slider slider image-2";
}

#slider {
    grid-area: slider;
}

#image-1 {
    grid-area: image-1;
}

#image-2 {
    grid-area: image-2;
}
</style>