<template>
  <div v-if="cart.length">
    <table
      v-for="{id, name, price, count, img} in cart"
      :key="id"
      class="mobile w-full mb-5 flex md:hidden"
    >
      <thead class="basis-1/5">
        <tr class="flex flex-col text-left">
          <th class="py-5">Название</th>
          <th class="py-3">Цена</th>
          <th class="py-3">Кол-во, м.</th>
          <th class="py-3">Сумма</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="basis-4/5">
        <tr class="flex flex-col">
          <td class="flex items-center mb-5">
            <span class="flex items-center mr-5">
              <img :src="img" :alt="name" class="w-14 mr-5" />
              <strong>{{ name }} ({{ id }})</strong>
            </span>
            <button @click="deleteProductFromCart(id)">
              <img src="/img/icons/trash-box.svg" alt="Иконка орзины мусора" />
            </button>
          </td>
          <td class="mb-5">
            <strong>{{ price }} с.</strong>
          </td>
          <td class="mb-5">
            <div class="flex">
              <button class="count-control cursor-pointer mr-2" @click="addOneProductToCart(id)">
                +
              </button>
              <small class="count-control mr-2">{{ count }}</small>
              <button class="count-control cursor-pointer" @click="deleteOneProductFromCart(id)">
                -
              </button>
            </div>
          </td>
          <td class="mb-3">
            <strong>{{ price * count }} с.</strong>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="desctop hidden md:table w-11/12 mb-16">
      <thead class="border-b-2 border-b-black">
        <tr class="text-left">
          <th>Название</th>
          <th>Цена</th>
          <th>Кол-во, м.</th>
          <th>Сумма</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{id, name, price, count, img} in cart" :key="id">
          <td class="flex items-center">
            <img :src="img" :alt="name" class="w-24 mr-5" />
            <strong>{{ name }} ({{ id }})</strong>
          </td>
          <td>
            <strong>{{ price }} с.</strong>
          </td>
          <td>
            <div class="flex">
              <button class="count-control cursor-pointer mr-2" @click="addOneProductToCart(id)">
                +
              </button>
              <small class="count-control mr-2">{{ count }}</small>
              <button class="count-control cursor-pointer" @click="deleteOneProductFromCart(id)">
                -
              </button>
            </div>
          </td>
          <td>
            <strong>{{ price * count }} с.</strong>
          </td>
          <td>
            <button @click="deleteProductFromCart(id)">
              <img src="/img/icons/trash-box.svg" alt="Иконка орзины мусора" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <table class="mobile w-full mb-5 flex md:hidden whitespace-nowrap">
      <thead class="basis-1/5 mr-2">
        <tr class="flex flex-col text-left">
          <th class="py-5">Название</th>
          <th class="py-3">Цена</th>
          <th class="py-3">Кол-во, м.</th>
          <th class="py-3">Сумма</th>
        </tr>
      </thead>
      <tbody class="basis-4/5">
        <tr class="flex flex-col">
          <td class="py-5">Ваша корзина пуста</td>
          <td class="py-3">Ваша корзина пуста</td>
          <td class="py-3">Ваша корзина пуста</td>
          <td class="py-3">Ваша корзина пуста</td>
        </tr>
      </tbody>
    </table>

    <table class="desctop w-11/12 mb-16 hidden md:table">
      <thead class="border-b-2 border-b-black">
        <tr class="text-left">
          <th>Название</th>
          <th>Цена</th>
          <th>Кол-во, м.</th>
          <th>Сумма</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ваша корзина пуста</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {
  addOneProductToCart,
  deleteOneProductFromCart,
  deleteProductFromCart,
  addOrder,
} from '@/composables/states'

const cart = useCart()
</script>

<style lang="postcss" scoped>
table.desctop thead tr th {
  padding-bottom: 6px;
  color: #150802;
}
.count-control {
  @apply w-7 h-7 flex items-center justify-center border rounded-md border-slate-200 text-slate-600;
}
</style>
