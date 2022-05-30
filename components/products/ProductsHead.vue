<template>
  <div class="mb-9">
    <div class="hidden items-center justify-between mb-6 md:flex">
      <h1>Каталог товаров</h1>
      <p class="text-sm">Главное | Каталог товаров</p>
    </div>

    <div class="flex flex-col items-center justify-between md:flex-row">
      <div class="relative w-full mb-5 md:w-auto md:mb-0">
        <input
          type="text"
          placeholder="Поиск"
          class="w-full py-1 px-4 md:mr-5 border rounded-md border-slate-500 bg-slate-200 md:w-52 xl:w-64"
        />
        <button class="absolute top-2 right-4 md:right-8">
          <img src="/img/icons/search-products.svg" alt="Иконка лупы" />
        </button>
      </div>

      <div
        class="w-full flex flex-col items-center justify-between text-slate-500 sm:flex-row md:w-auto"
      >
        <div class="w-full flex items-center justify-between mb-4 sm:mb-0 md:w-auto">
          <p class="mr-5 xl:mr-14">Показано 1-9 из 50</p>
          <p class="md:mr-6 xl:mr-16">
            <span class="mr-2 xl:mr-4">Показать</span>
            <span class="mr-1 xl:mr-3 font-bold border-b border-b-slate-500"> 9 </span>
            <span class="mr-2 xl:mr-3">15</span>
            <span>30</span>
          </p>
        </div>

        <div class="w-full flex items-center justify-center sm:justify-end md:w-auto">
          <div class="flex items-center mr-4 xl:mr-7">
            <button class="h-5 w-5 mr-2">
              <img src="/img/icons/tiles.svg" alt="Иконка плиток" class="h-full w-full" />
            </button>
            <button class="h-5 w-5">
              <img src="/img/icons/rows.svg" alt="Иконка рядей" class="h-full w-full" />
            </button>
          </div>

          <select name="sort" class="py-2 px-4 rounded-md font-bold bg-slate-200">
            <option value="default" disabled selected>Сортировка по</option>

            <option value="price ascending">Цена по возрастанию</option>
            <option value="price descending">Цена по убыванию</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
