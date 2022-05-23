<template>
    <div class="mt-14 mb-9">
        <div class="flex items-center justify-between mb-6">
            <h1>Каталог товаров</h1>
            <p class="text-sm">Главное | Каталог товаров</p>
        </div>
        <div class="flex items-center justify-between">
            <div class="relative">
                <input
                    type="text"
                    placeholder="Поиск"
                    class="
                        w-64
                        py-1
                        px-4
                        border
                        rounded-md
                        border-slate-500
                        bg-slate-200
                    "
                />
                <button class="absolute top-2 right-3">
                    <img
                        src="/img/icons/search-products.svg"
                        alt="Иконка лупы"
                    />
                </button>
            </div>
            <div class="flex items-center text-slate-500">
                <p class="mr-14">Показано 1-9 из 50</p>
                <p class="mr-16">
                    <span class="mr-4">Показать</span>
                    <span class="mr-3 font-bold border-b border-b-slate-500">
                        9
                    </span>
                    <span class="mr-3">15</span>
                    <span>30</span>
                </p>
                <div class="flex items-center">
                    <div class="flex items-center mr-7">
                        <button class="mr-6">
                            <img
                                src="/img/icons/tiles.svg"
                                alt="Иконка плиток"
                            />
                        </button>
                        <button>
                            <img src="/img/icons/rows.svg" alt="Иконка рядей" />
                        </button>
                    </div>
                    <select
                        name="sort"
                        class="py-1 px-4 rounded-md font-bold bg-slate-200"
                    >
                        <option value="default" disabled selected>
                            Сортировка по
                        </option>

                        <option value="price ascending">
                            Цена по возрастанию
                        </option>
                        <option value="price descending">
                            Цена по убыванию
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>