<template>
    <section class="products-container px-8">
        <ProductsHead />

        <div class="flex mb-28">
            <ProductsCategories class="basis-2/12" />
            <ProductsAll class="basis-5/6" />
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="css" scoped>
.products-container {
    max-width: 1440px;
    margin: auto;
}
</style>