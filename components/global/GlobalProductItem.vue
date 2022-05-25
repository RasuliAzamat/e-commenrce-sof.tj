<template>
    <NuxtLink :to="`/products/${product.id}`">
        <div class="flex flex-col">
            <img
                :src="product.img"
                :alt="product.name"
                class="mb-4"
                style="filter: drop-shadow(3px 3px 15px rgba(0, 0, 0, 0.15))"
            />

            <div class="flex justify-between">
                <div class="text-xl">
                    <p>{{ product.name }} ({{ product.id }})</p>
                    <small class="text-yellow-800">
                        {{ toCorrectCurrency(product.price) }} смн
                    </small>
                </div>

                <button
                    :class="['p-2 rounded-full self-end', cartIconColor]"
                    @click.stop.prevent="
                        addToCart(product.id), $router.push('/cart')
                    "
                >
                    <img
                        src="/img/icons/product-cart.svg"
                        alt="Иконка корзины"
                    />
                </button>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
import { addToCart } from "@/composables/states";

const { product, cartIconColor } = defineProps({
    product: Object,
    cartIconColor: {
        type: String,
        default: "bg-slate-300",
    },
});

const toCorrectCurrency = (price) => {
    return price
        .toLocaleString(undefined, { minimumFractionDigits: 2 })
        .replace(".", ",");
};
</script>

<style lang="scss" scoped>
</style>