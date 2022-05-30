<template>
  <div>
    <div class="mb-3 p-5 rounded-xl bg-slate-100">
      <table class="w-full mb-5">
        <thead>
          <tr class="text-center">
            <th colspan="100%">Информация о заказе</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{id, name, count, price} in cart" :key="id">
            <td>
              <strong class="text-sm">{{ name }}</strong>
            </td>
            <td>
              <span>{{ count }} шт.</span>
            </td>
            <td>
              <span class="font-bold">{{ price }} c.</span>
            </td>
          </tr>
        </tbody>
        <tfoot class="pb-2 border-t-2 border-slate-400">
          <tr>
            <td colspan="1"><strong>Итог:</strong></td>
            <td colspan="2" class="text-right">
              <span class="font-bold">{{ fullPrice }} с.</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <ElementButton
      class="w-full py-2"
      @click="
        addOrder({
          id: Date.now(),
          date: new Date().toLocaleDateString(),
          name: orders,
          price: fullPrice,
        })
      "
      >Подтвердить заказ</ElementButton
    >
  </div>
</template>

<script setup>
import {addOrder} from '@/composables/states'

const cart = useCart()

const fullPrice = computed(() => {
  return cart.value.reduce((accum, next) => {
    return (accum += next.price * next.count)
  }, 0)
})

const orders = computed(() => {
  return cart.value.reduce((accum, curr) => {
    return (accum += curr.name)
  }, [])
})

console.log(orders)
</script>

<style lang="postcss" scoped>
thead tr th {
  @apply pb-4;
}
tbody tr td {
  @apply pb-4;
}
tfoot tr td {
  @apply pt-4;
}
td span {
  @apply text-slate-400;
}
</style>
