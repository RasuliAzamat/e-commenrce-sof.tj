<template>
    <section class="px-8 mb-12">
        <h2 class="mb-10 text-danger">Акции и новости</h2>

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
</template>

<script setup>
const news = ref([
    {
        id: 1,
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