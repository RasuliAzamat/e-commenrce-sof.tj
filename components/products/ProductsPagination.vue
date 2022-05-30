<template>
  <div class="flex flex-wrap items-center">
    <ProductsPaginationItem isActive path="#">
      <ArrowLeftIcon class="w-4 text-inherit" />
    </ProductsPaginationItem>

    <div v-for="page in 6" :key="page">
      <ProductsPaginationItem :isActive="page === 1" path="#">
        {{ page }}
      </ProductsPaginationItem>
    </div>

    <ProductsPaginationItem isLast path="#">
      <ArrowRightIcon class="w-4 text-inherit" />
    </ProductsPaginationItem>
  </div>
</template>

<script setup>
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/vue/solid'
</script>

<style lang="scss" scoped></style>
