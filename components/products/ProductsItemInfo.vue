<template>
    <div class="mb-32">
        <div class="flex items-center justify-between mb-12">
            <h1>{{ currentProduct.name }}</h1>
            <small>
                Главное | Каталог товаров | Всё для дома | Салфетки сухие
            </small>
        </div>

        <div class="flex justify-between">
            <div
                class="basis-1/3"
                style="filter: drop-shadow(3px 3px 15px rgba(0, 0, 0, 0.15))"
            >
                <img
                    :src="currentProduct.img"
                    :alt="currentProduct.name"
                    class="w-full object-fill"
                />
            </div>

            <table class="basis-1/3 h-60">
                <tbody>
                    <tr>
                        <td>Тип</td>
                        <td>Салфетки бумажные инвентаря для уборки</td>
                    </tr>
                    <tr>
                        <td>Особенности</td>
                        <td>Антибактериальная</td>
                    </tr>
                    <tr>
                        <td>Аромат</td>
                        <td>Без отдушки</td>
                    </tr>
                    <tr>
                        <td>Цвет</td>
                        <td>Белый</td>
                    </tr>
                    <tr>
                        <td>Единиц в одном товаре</td>
                        <td>400</td>
                    </tr>
                </tbody>
            </table>

            <div class="basis-1/3 py-16 px-14 rounded-2xl bg-slate-100">
                <div>
                    <p class="flex items-center justify-between mb-3">
                        <strong class="text-xl">
                            <span class="text-4xl">02</span> смн
                        </strong>
                        <strong class="text-xl self-end">за упаковку</strong>
                    </p>

                    <p class="mb-11" style="color: #150802">В наличии</p>

                    <div class="flex items-center justify-between mb-10">
                        <p style="color: #150802">Количество:</p>

                        <div class="flex">
                            <button
                                class="
                                    flex
                                    items-center
                                    justify-center
                                    w-10
                                    h-10
                                    mr-1.5
                                    rounded-lg
                                    text-slate-500
                                    bg-white
                                "
                            >
                                +
                            </button>
                            <p
                                class="
                                    flex
                                    items-center
                                    justify-center
                                    w-10
                                    h-10
                                    mr-1.5
                                    rounded-lg
                                    text-slate-500
                                    bg-white
                                "
                            >
                                0
                            </p>
                            <button
                                class="
                                    flex
                                    items-center
                                    justify-center
                                    w-10
                                    h-10
                                    mr-1.5
                                    rounded-lg
                                    text-slate-500
                                    bg-white
                                "
                            >
                                -
                            </button>
                        </div>
                    </div>

                    <div>
                        <ElementButton class="w-full py-2 rounded-lg mb-2">
                            <img
                                src="/img/icons/shopping-bag.svg"
                                alt="Иконка сумочки"
                                class="inline-block"
                            />
                            В корзину
                        </ElementButton>
                        <ElementButton class="w-full py-2 rounded-lg">
                            Оптовый заказ
                        </ElementButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const products = useProducts();

const routeId = Number(route.params.id);
const currentProduct = products.value.find((product) => product.id === routeId);
</script>

<style lang="postcss" scoped>
table tbody tr {
    @apply align-top;
}
table tbody tr td:first-child {
    @apply w-1/2 pl-5;
}
</style>