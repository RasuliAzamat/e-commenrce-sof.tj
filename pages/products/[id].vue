<template>
  <section class="max-w-appContainer px-4 lg:px-8 mx-auto">
    <div class="flex items-center justify-between mb-12">
      <h1 class="whitespace-nowrap">{{ currentProduct.name }}</h1>
      <small class="hidden md:inline-block">
        Главное | Каталог товаров | Всё для дома | Салфетки сухие
      </small>
    </div>

    <div class="product mb-20">
      <div class="img" style="filter: drop-shadow(3px 3px 15px rgba(0, 0, 0, 0.15))">
        <img :src="currentProduct.img" :alt="currentProduct.name" class="w-full object-fill" />
      </div>

      <table class="table h-60">
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

      <div class="check py-12 md:py-16 px-10 md:px-14 rounded-2xl bg-slate-100">
        <div>
          <p class="flex items-center justify-between mb-3">
            <strong class="text-xl"> <span class="text-4xl">02</span> смн </strong>
            <strong class="text-xl self-end">за упаковку</strong>
          </p>

          <p class="mb-11" style="color: #150802">В наличии</p>

          <div class="flex items-center justify-between mb-10">
            <p style="color: #150802">Количество:</p>

            <div class="flex">
              <button class="counter-view mr-1.5" @click="addOneProductToCart(currentProduct.id)">
                +
              </button>
              <p class="counter-view mr-1.5">
                {{ currentProduct.count }}
              </p>
              <button
                class="counter-view"
                @click="deleteOneProductFromCart(currentProduct.id)"
                :disabled="currentProduct.count === 0"
              >
                -
              </button>
            </div>
          </div>

          <div>
            <ElementButton class="w-full py-2 rounded-lg mb-2" @click="$router.push('/cart')">
              <img src="/img/icons/shopping-bag.svg" alt="Иконка сумочки" class="inline-block" />
              В корзину
            </ElementButton>
            <ElementButton class="w-full py-2 rounded-lg"> Оптовый заказ </ElementButton>
          </div>
        </div>
      </div>

      <div class="slider">
        <h3 class="mb-9">С этим товаром смотрят</h3>

        <swiper
          :slidesPerView="1.5"
          :spaceBetween="30"
          :breakpoints="{
            1024: {
              slidesPerView: 5,
              spaceBetween: 70,
            },
          }"
          :freeMode="true"
          :modules="modules"
          class="products-also-see-slider"
        >
          <swiper-slide v-for="{id, name, img, price} in productsAlsoSee" :key="id">
            <NuxtLink :to="`/products/${id}`">
              <div class="flex flex-col">
                <img
                  :src="img"
                  :alt="name"
                  style="filter: drop-shadow(3px 3px 15px rgba(0, 0, 0, 0.15))"
                />
                <div class="text-xl">
                  <p>{{ name }}</p>
                  <small class="text-yellow-800"> {{ toCorrectCurrency(price) }} смн </small>
                </div>
              </div>
            </NuxtLink>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
import {FreeMode} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {
  addToCart,
  addOneProductToCart,
  deleteOneProductFromCart,
  deleteProductFromCart,
  addOrder,
} from '@/composables/states'

import 'swiper/css'
import 'swiper/css/free-mode'
import '@/assets/css/slider/index.css'
import '@/assets/css/slider/products-also-see-slider.css'

const route = useRoute()
const products = useProducts()

const routeId = Number(route.params.id)
const currentProduct = products.value.find(product => product.id === routeId)

const modules = ref([FreeMode])

const productsAlsoSee = ref([
  {
    id: 1,
    name: 'Влажные солфетки',
    price: 20,
    img: '/img/global/product-img-1.png',
  },
  {
    id: 2,
    name: 'Сухие солфетки',
    price: 25,
    img: '/img/global/product-img-2.png',
  },
  {
    id: 3,
    name: 'Сухие салфетки BOX',
    price: 30,
    img: '/img/global/product-img-3.png',
  },
  {
    id: 4,
    name: 'Влажные солфетки',
    price: 20,
    img: '/img/global/product-img-1.png',
  },
  {
    id: 5,
    name: 'Сухие солфетки',
    price: 25,
    img: '/img/global/product-img-2.png',
  },
  {
    id: 6,
    name: 'Влажные солфетки',
    price: 20,
    img: '/img/global/product-img-1.png',
  },
  {
    id: 7,
    name: 'Сухие солфетки',
    price: 25,
    img: '/img/global/product-img-2.png',
  },
  {
    id: 8,
    name: 'Сухие салфетки BOX',
    price: 30,
    img: '/img/global/product-img-3.png',
  },
  {
    id: 9,
    name: 'Влажные солфетки',
    price: 20,
    img: '/img/global/product-img-1.png',
  },
  {
    id: 10,
    name: 'Сухие солфетки',
    price: 25,
    img: '/img/global/product-img-2.png',
  },
])

const toCorrectCurrency = price => {
  return price.toLocaleString(undefined, {minimumFractionDigits: 2}).replace('.', ',')
}
</script>

<style lang="postcss" scoped>
.product {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: max-content max-content max-content max-content;
  gap: 50px 10px;
  grid-template-areas:
    'img'
    'table'
    'check'
    'slider';
}
.img {
  grid-area: img;
}
.table {
  grid-area: table;
}
.check {
  grid-area: check;
}
.slider {
  grid-area: slider;
}

.counter-view {
  @apply flex items-center justify-center w-10 h-10 rounded-lg text-slate-500 bg-white;
}

@media (min-width: 768px) {
  .product {
    grid-template-columns: 50% 50%;
    grid-template-rows: max-content max-content;
    grid-template-areas:
      'img table'
      'check slider';
  }
  table tbody tr {
    @apply align-top;
  }
  table tbody tr td:first-child {
    @apply w-1/2 pl-5;
  }
}

@media (min-width: 1024px) {
  .product {
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: max-content max-content;
    grid-template-areas:
      'img table check'
      'slider slider slider';
  }
}
</style>
