<template>
    <div class="mb-28">
        <h3 class="mb-9">С этим товаром смотрят</h3>

        <div class="flex flex-wrap items-center justify-between">
            <NuxtLink
                v-for="{ id, name, img, price } in products"
                :key="id"
                :to="`/products/${id}`"
            >
                <div class="w-52 flex flex-col last:mr-0">
                    <img
                        :src="img"
                        :alt="name"
                        class="mb-4"
                        style="
                            filter: drop-shadow(
                                3px 3px 15px rgba(0, 0, 0, 0.15)
                            );
                        "
                    />

                    <div class="text-xl">
                        <p>{{ name }}</p>
                        <small class="text-yellow-800">
                            {{ toCorrectCurrency(price) }} смн
                        </small>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const products = ref([
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
]);

const toCorrectCurrency = (price) => {
    return price
        .toLocaleString(undefined, { minimumFractionDigits: 2 })
        .replace(".", ",");
};
</script>

<style lang="scss" scoped>
</style>