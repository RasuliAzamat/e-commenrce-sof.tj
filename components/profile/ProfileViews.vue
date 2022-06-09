<template>
  <component v-if="isIndex" :is="ProfileOrders"></component>
  <component v-else :is="components[component]"></component>
</template>

<script setup>
import ProfileAdress from './ProfileAdress.vue'
import ProfileOrders from './ProfileOrders.vue'
import ProfileSettings from './ProfileSettings.vue'
import ProfileTabs from './ProfileTabs.vue'

const route = useRoute()

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

const components = {
  ProfileAdress,
  ProfileOrders,
  ProfileSettings,
  ProfileTabs,
}

const component = computed(() => {
  const action = actions.value.find(a => a.query === route.params.action)
  return action?.component
})
</script>

<style lang="scss" scoped></style>
