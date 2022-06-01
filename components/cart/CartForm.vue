<template>
  <form>
    <h3 class="mb-6">Контактная информация</h3>

    <div
      v-if="user"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-4 sm:grid-rows-2 md:grid-rows-1 gap-5 mb-5"
    >
      <ElementInput inputName="lastName" :inputValue="user.lastName" />
      <ElementInput inputName="name" :inputValue="user.name" />
      <ElementInput inputType="tel" inputName="phone" :inputValue="user.phone" />
      <ElementInput inputName="adress" :inputValue="user.street" v-if="isDelivery == true" />
    </div>
    <div v-else class="flex flex-wrap mb-5">
      <ElementInput inputName="lastName" inputPlaceholder="Фамилия*" />
      <ElementInput inputName="name" inputPlaceholder="Имя*" />
      <ElementInput inputType="tel" inputName="phone" placeholder="Номер телефона*" />
      <ElementInput inputName="adress" placeholder="Адрес*" v-if="isDelivery == true" />
    </div>

    <ElementButton class="px-5 py-3">Далее</ElementButton>
  </form>
</template>

<script setup>
const user = useUser()
const {isDelivery} = defineProps({
  isDelivery: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="postcss" scoped>
form input {
  @apply font-bold mr-5 mb-5;
}
</style>
