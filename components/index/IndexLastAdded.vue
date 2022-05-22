<template>
    <section class="container max-w-6xl px-4 ml-auto mr-8 mb-24">
        <div class="flex items-center justify-between mb-12">
            <h2 class="text-danger">Последние добавления</h2>
            <NuxtLink to="#" class="text-2xl no-underline">
                Cмотреть все
            </NuxtLink>
        </div>

        <div class="flex items-center mb-9">
            <GlobalProductItem
                v-for="product in lastAddedProducts"
                :key="product.id"
                :product="product"
                cartIconColor="bg-slate-300"
                class="flex-1 mr-16 last:hidden"
            />
        </div>

        <div class="flex items-center justify-center dots">
            <span
                v-for="(product, index) in lastAddedProducts"
                :key="product.id"
                :class="[
                    'w-5 h-5 mx-2.5 rounded-full bg-slate-300',
                    {
                        active: index === activeSlideIndex,
                    },
                ]"
            ></span>
        </div>
    </section>
</template>

<script setup>
const lastAddedProducts = ref([
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
]);

const activeSlideIndex = ref(0);

setInterval(() => {
    activeSlideIndex.value++;

    const prevProduct = lastAddedProducts.value.shift();
    lastAddedProducts.value.push(prevProduct);

    if (activeSlideIndex.value === lastAddedProducts.value.length) {
        activeSlideIndex.value = 0;
    }
}, 3000);
</script>

<style lang="postcss" scoped>
.dots span.active {
    @apply bg-primary;
}
</style>