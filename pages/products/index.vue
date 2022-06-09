<template>
  <section class="max-w-appContainer px-4 lg:px-8 mx-auto mb-28">
    <ProductsHead />

    <div class="md:flex">
      <ProductsCategories class="hidden md:basis-2/12 md:inline-block md:mr-28" />
      <ProductsAll :products="products" class="md:basis-5/6" />
    </div>
  </section>
</template>

<script setup>
const products = useProducts()
</script>

<style lang="css" scoped></style>
