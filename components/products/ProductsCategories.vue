<template>
    <aside class="text-slate-500">
        <h3 class="mb-9">Категории</h3>

        <div class="mb-9">
            <p class="flex justify-between mb-2 font-bold">
                Всего товаров <span>1063</span>
            </p>

            <ul>
                <li
                    v-for="{ id, name, count } in categories"
                    :key="id"
                    class="flex justify-between"
                >
                    <NuxtLink to="#">{{ name }}</NuxtLink>
                    <span>{{ count }}</span>
                </li>
            </ul>
        </div>
        <div class="mb-9">
            <p class="font-bold mb-2">Тип материала</p>

            <ul>
                <li v-for="{ id, name } in material" :key="id" class="">
                    <NuxtLink to="#">{{ name }}</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="mb-7">
            <p class="mb-2 font-bold">Цена</p>
            <div>
                <input type="range" name="price" />
            </div>
            <small>Цена от 20 до 1000 смн</small>
        </div>

        <ElementButton text="Применить" class="px-4 py-1" />
    </aside>
</template>

<script setup>
const categories = ref([
    { id: 1, name: "Атлас", count: 98 },
    { id: 2, name: "Шелк", count: 54 },
    { id: 3, name: "Паплин", count: 43 },
    { id: 4, name: "Помбарх", count: 69 },
    { id: 5, name: "Однотонный ", count: 78 },
    { id: 6, name: "Вышивка", count: 45 },
    { id: 7, name: "Гирбишин", count: 20 },
    { id: 8, name: "Джакарта ", count: 22 },
    { id: 9, name: "Сатин", count: 9 },
    { id: 10, name: "Шифон", count: 12 },
    { id: 11, name: "Балгарка", count: 13 },
    { id: 12, name: "Черный Принц", count: 111 },
    { id: 13, name: "Сетка", count: 256 },
    { id: 14, name: "Чихол", count: 65 },
    { id: 15, name: "Сари", count: 78 },
    { id: 16, name: "Турецкий Паплин", count: 90 },
]);

const material = ref([
    { id: 1, name: "Со стразами" },
    { id: 2, name: "Синтеки" },
    { id: 3, name: "Хлопок" },
    { id: 4, name: "Спандекс + хлопок" },
]);
</script>

<style lang="scss" scoped>
</style>