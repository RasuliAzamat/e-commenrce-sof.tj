<template>
  <div>
    <h3 class="mb-6">Способ доставки</h3>

    <div class="flex flex-col sm:flex-row">
      <ElementButton
        :class="[
          'sm:w-1/2 md:w-auto px-6 py-2 mb-5 sm:mb-0 sm:mr-5 rounded-xl delivery-option',
          {
            active: !isDelivery,
          },
        ]"
        @click="$emit('changeDelivery')"
      >
        <img src="/img/icons/location.svg" alt="Иконка геолокации" class="inline-block" />
        Самовывоз
      </ElementButton>
      <ElementButton
        :class="[
          'sm:w-1/2 md:w-auto px-6 py-2 mb-5 sm:mb-0 sm:mr-5 rounded-xl delivery-option',
          {
            active: isDelivery,
          },
        ]"
        @click="$emit('changeDelivery')"
      >
        <img src="/img/icons/delivery.svg" alt="Иконка грузовика" class="inline-block" />
        Курьерская доставка
      </ElementButton>
    </div>
  </div>
</template>

<script setup>
const {isDelivery} = defineProps({
  isDelivery: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="postcss" scoped>
.delivery-option.active {
  @apply bg-primary;
}
.delivery-option {
  @apply bg-slate-300;
}
</style>
