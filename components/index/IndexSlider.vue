<template>
    <section id="wrapper" class="px-8 mb-12">
        <div class="relative" id="slider">
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
                        'w-2 h-2 mx-2 rounded-full cursor-pointer bg-white',
                        {
                            active: index === activeSlideIndex,
                        },
                    ]"
                    @click="makeActive(index)"
                ></span>
            </div>
        </div>

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