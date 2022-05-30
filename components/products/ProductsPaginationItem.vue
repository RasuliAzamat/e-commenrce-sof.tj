<template>
  <NuxtLink
    :to="path"
    :class="[
      'flex items-center justify-center w-11 h-11 mb-2 cursor-pointer rounded-md',
      {
        'bg-primary text-white': isActive,
        'bg-slate-200 text-primary': !isActive,
        'mr-3.5': !isLast,
        'mr-0': isLast,
      },
    ]"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
const {isActive, isLast, path} = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
  path: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
