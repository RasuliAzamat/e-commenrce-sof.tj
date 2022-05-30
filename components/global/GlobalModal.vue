<template>
  <div v-if="isVisible">
    <div class="modal-backdrop" @click.self="$emit('changeVisability')">
      <div class="modal">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const {isVisible} = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="postcss" scoped>
.modal-backdrop {
  @apply fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50;
}

.modal {
  width: 650px !important;
  @apply pt-14 pb-20 px-16 rounded-2xl bg-white;
}

@media (max-width: 768px) {
  .modal {
    width: 390px !important;
    @apply pt-9 pb-12 px-10;
  }
}
</style>
