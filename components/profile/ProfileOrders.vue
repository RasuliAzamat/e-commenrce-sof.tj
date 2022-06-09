<template>
  <div>
    <div v-if="orders.length">
      <table
        class="w-full flex md:hidden pt-5 mb-10 last:mb-0 border-t-2 border-t-black mobile"
        v-for="{id, name, status, date, price} in orders"
        :key="id"
      >
        <thead class="basis-1/2">
          <tr class="flex flex-col text-left">
            <th>Номер заказа</th>
            <th>Дата</th>
            <th>Наименомвание</th>
            <th>Статус</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody v-if="orders.length" class="basis-1/2">
          <tr class="flex flex-col">
            <td>№ {{ id }}</td>
            <td>{{ date }}</td>
            <td>{{ name }}</td>
            <td>{{ status }}</td>
            <td>{{ price }} с.</td>
          </tr>
        </tbody>
        <tbody v-else class="basis-1/2">
          <tr class="flex flex-col">
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
          </tr>
        </tbody>
      </table>
      <table class="desctop hidden md:table w-full">
        <thead class="border-b-2 border-b-black">
          <tr class="text-left">
            <th>Номер заказа</th>
            <th>Дата</th>
            <th>Наименомвание</th>
            <th>Статус</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody v-if="orders.length">
          <tr v-for="{id, name, status, date, price} in orders" :key="id" class="odd:bg-slate-100">
            <td>№ {{ id }}</td>
            <td>{{ date }}</td>
            <td>{{ name }}</td>
            <td>{{ status }}</td>
            <td>{{ price }} с.</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td>у вас пока нет заказов</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <table class="w-full flex md:hidden pt-5 mb-10 last:mb-0 border-t-2 border-t-black mobile">
        <thead class="basis-1/2">
          <tr class="flex flex-col text-left">
            <th>Номер заказа</th>
            <th>Дата</th>
            <th>Наименомвание</th>
            <th>Статус</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody class="basis-1/2">
          <tr class="flex flex-col">
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
            <td>у вас пока нет заказов</td>
          </tr>
        </tbody>
      </table>

      <table class="desctop hidden md:table w-full">
        <thead class="border-b-2 border-b-black">
          <tr class="text-left">
            <th>Номер заказа</th>
            <th>Дата</th>
            <th>Наименомвание</th>
            <th>Статус</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>у вас пока нет заказов</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const orders = ref([
  {
    id: '000001',
    name: 'Сухие салфетки',
    date: '01.03.22',
    status: 'Закрыт',
    price: 300,
  },
  {
    id: '000002',
    name: 'Сухие салфетки',
    date: '01.03.22',
    status: 'Закрыт',
    price: 300,
  },
  {
    id: '000003',
    name: 'Сухие салфетки',
    date: '01.03.22',
    status: 'Закрыт',
    price: 300,
  },
])
</script>

<style lang="postcss" scoped>
table.mobile thead tr th,
table.mobile tbody tr td {
  padding: 8px 16px;
}

table.mobile:first-child {
  @apply border-t-0;
}

table.mobile thead tr th:nth-child(2n-1),
table.mobile tbody tr td:nth-child(2n-1) {
  @apply bg-slate-100;
}

table.desctop thead tr th {
  padding: 8px 16px;
  color: #150802;
}
table.desctop tbody tr td {
  padding: 16px;
  color: #150802;
}

table.desctop tbody tr:nth-child(2n + 1) {
  @apply bg-slate-100;
}
</style>
