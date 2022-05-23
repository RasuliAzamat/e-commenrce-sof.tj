<template>
    <div class="flex flex-col">
        <img
            :src="product.img"
            :alt="product.name"
            class="mb-4"
            style="filter: drop-shadow(3px 3px 15px rgba(0, 0, 0, 0.15))"
        />

        <div class="flex justify-between">
            <div class="text-xl">
                <p>{{ product.name }} {{ product.id }}</p>
                <small class="text-yellow-800">
                    {{ toCorrectCurrency(product.price) }} смн
                </small>
            </div>

            <button :class="['p-2 rounded-full self-end', cartIconColor]">
                <img src="/img/icons/product-cart.svg" alt="Иконка корзины" />
            </button>
        </div>
    </div>
</template>

<script setup>
const { product, cartIconColor } = defineProps({
    product: Object,
    cartIconColor: {
        type: String,
        default: 'bg-slate-300'
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