<template>
  <section class="max-w-appContainer px-4 lg:px-8 mx-auto mb-20">
    <div class="flex">
      <CartTable class="w-full sm:basis-3/5 md:basis-3/4 mb-20" />
      <CartInfo class="sm:basis-2/5 md:basis-1/4 h-max hidden sm:inline-block" />
    </div>
    <CartDelivery
      class="mb-16"
      :isDelivery="isDelivery"
      @changeDelivery="isDelivery = !isDelivery"
    />
    <CartForm class="mb-9 md:mb-0" :isDelivery="isDelivery" />
    <CartInfo class="sm:hidden" />
  </section>
</template>

<script setup>
const isDelivery = ref(true)
</script>

<style lang="scss" scoped></style>
