<template>
    <div class="flex flex-col items-end">
        <div class="flex flex-wrap justify-end mb-12">
            <GlobalProductItem
                v-for="product in products"
                :key="product.id"
                class="inline-block mr-16 mb-9 product"
                :product="product"
            />
        </div>
        <ProductsPagination />
    </div>
</template>

<script setup>
const products = useProducts();
</script>

<style lang="postcss" scoped>
.product:nth-child(3n) {
    @apply mr-0;
}
</style>