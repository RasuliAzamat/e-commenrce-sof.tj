<template>
    <table class="w-11/12 mb-16">
        <thead class="border-b-2 border-b-black">
            <tr class="text-left">
                <th>Название</th>
                <th>Цена</th>
                <th>Кол-во, м.</th>
                <th>Сумма</th>
                <th></th>
            </tr>
        </thead>
        <tbody v-if="cart.length">
            <tr v-for="{ id, name, price, count, img } in cart" :key="id">
                <td class="flex items-center">
                    <img :src="img" :alt="name" class="w-24 mr-5" />
                    <strong>{{ name }} ({{ id }})</strong>
                </td>
                <td>
                    <strong>{{ price }} с.</strong>
                </td>
                <td>
                    <div class="flex">
                        <button
                            class="count-control cursor-pointer mr-2"
                            @click="addOneProductToCart(id)"
                        >
                            +
                        </button>
                        <small class="count-control mr-2">{{ count }}</small>
                        <button
                            class="count-control cursor-pointer"
                            @click="deleteOneProductFromCart(id)"
                        >
                            -
                        </button>
                    </div>
                </td>
                <td>
                    <strong>{{ price * count }} с.</strong>
                </td>
                <td>
                    <button @click="deleteProductFromCart(id)">
                        <img
                            src="/img/icons/trash-box.svg"
                            alt="Иконка орзины мусора"
                        />
                    </button>
                </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td>Ваша корзина пуста</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import {
    addOneProductToCart,
    deleteOneProductFromCart,
    deleteProductFromCart,
    addOrder,
} from "@/composables/states";

const cart = useCart();
</script>

<style lang="postcss" scoped>
table thead tr th {
    padding-bottom: 6px;
    color: #150802;
}
.count-control {
    @apply w-7 h-7 flex items-center justify-center border rounded-md border-slate-200 text-slate-600;
}
</style>