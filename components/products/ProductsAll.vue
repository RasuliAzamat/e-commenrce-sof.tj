<template>
  <div>
    <div class="grid grid-rows-1 grid-cols-2 md:grid-cols-3 gap-10 xl:gap-16 mb-12">
      <GlobalProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
    <ProductsPagination />
  </div>
</template>

<script setup>
const {products} = defineProps({
  products: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="postcss" scoped></style>
