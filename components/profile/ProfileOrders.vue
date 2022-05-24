<template>
    <table>
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
            <tr
                v-for="{ id, name, status, date, price } in orders"
                :key="id"
                class="odd:bg-slate-100"
            >
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
</template>

<script setup>
const orders = ref([
    {
        id: "000001",
        name: "Сухие салфетки",
        date: "01.03.22",
        status: "Закрыт",
        price: 300,
    },
    {
        id: "000002",
        name: "Сухие салфетки",
        date: "01.03.22",
        status: "Закрыт",
        price: 300,
    },
    {
        id: "000003",
        name: "Сухие салфетки",
        date: "01.03.22",
        status: "Закрыт",
        price: 300,
    },
]);
</script>

<style lang="postcss" scoped>
table thead tr th {
    padding: 8px 16px;
    color: #150802;
}
table tbody tr td {
    padding: 16px;
    color: #150802;
}
</style>