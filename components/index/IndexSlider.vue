<template>
    <div class="relative">
        <IndexSliderItem
            :slides="slides"
            :activeSlideIndex="activeSlideIndex"
            class="w-full object-cover rounded-xl"
        />

        <div class="absolute flex items-center dots">
            <span
                v-for="(dot, index) in slides"
                :key="dot"
                :class="[
                    'w-2 h-2 mx-2 rounded-3xl cursor-pointer bg-white',
                    {
                        active: index === activeSlideIndex,
                    },
                ]"
                @click="makeActive(index)"
            ></span>
        </div>
    </div>
</template>

<script setup>
const activeSlideIndex = ref(0);

const slides = ref([
    { id: 1, img: "/img/index/slider/slider-img-1.png" },
    { id: 2, img: "/img/index/slider/slider-img-1.png" },
    { id: 3, img: "/img/index/slider/slider-img-1.png" },
    { id: 4, img: "/img/index/slider/slider-img-1.png" },
    { id: 5, img: "/img/index/slider/slider-img-1.png" },
]);

setInterval(() => {
    activeSlideIndex.value++;

    if (activeSlideIndex.value === slides.value.length) {
        activeSlideIndex.value = 0;
    }
}, 3000);

const makeActive = (index) => (activeSlideIndex.value = index);
</script>

<style lang="css" scoped>
.dots {
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.dots span.active {
    transform: scale(2);
    background: none;
    border: 1px solid white;
}
</style>