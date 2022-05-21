<template>
    <div>
        <section id="wrapper" class="px-8 mb-12">
            <IndexSlider id="slider" />

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
        <section class="px-8 mb-24">
            <h3 class="mb-10 text-danger">Акции и новости</h3>

            <div class="flex text-3xl font-bold text-white">
                <div
                    v-for="{ id, title, img } in news"
                    :key="id"
                    class="flex-1 h-56 mr-3 rounded-lg news"
                    :style="`background-image: url(${img});`"
                >
                    <p class="absolute top-3/4 ml-3 z-10">{{ title }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const news = ref([
    {
        id: 2,
        title: "Новое поступления товаров",
        img: "/img/index/index-img-1.png",
    },
    {
        id: 2,
        title: "Скидки на влажные салфетки",
        img: "/img/index/index-img-2.png",
    },
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
.news {
    position: relative;

    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.news::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 90%;
    height: 100%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    background-color: rgba(0, 0, 0, 0.2);
}
</style>