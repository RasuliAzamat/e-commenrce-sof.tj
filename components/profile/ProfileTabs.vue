<template>
  <ul
    class="flex justify-between pb-5 border-b-2 border-b-black md:border-b-0 md:flex-col md:justify-start md:mb-0"
  >
    <li v-for="{id, name, query} in actions" :key="id" class="md:mb-4 md:last:mb-0 font-bold">
      <NuxtLink v-if="name === 'Заказы'" :to="`/profile/${query}`" :class="{isIndex}">
        {{ name }}
      </NuxtLink>

      <NuxtLink v-else :to="`/profile/${query}`">
        {{ name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const {isIndex} = defineProps({
  isIndex: {
    type: Boolean,
    default: false,
  },
})
const actions = ref([
  {id: 1, name: 'Заказы', component: 'ProfileOrders', query: 'orders'},
  {id: 2, name: 'Адрес', component: 'ProfileAdress', query: 'adress'},
  {id: 3, name: 'Настройки аккаунта', component: 'ProfileSettings', query: 'settings'},
  {id: 4, name: 'Выйти', component: '', query: 'quit'},
])
</script>

<style lang="css" scoped>
ul li a {
  color: #9a9a9a;
}
ul li a.active {
  color: #150802 !important;
}
ul li a.isIndex {
  color: #150802 !important;
}
</style>
