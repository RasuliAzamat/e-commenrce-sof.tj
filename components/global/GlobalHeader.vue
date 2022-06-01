<template>
  <header>
    <div class="hidden md:flex items-center mb-16">
      <NuxtLink to="/" class="w-48 lg:w-52">
        <img src="/img/logo/header-logo.png" alt="Sof.tj logo" />
      </NuxtLink>

      <div class="flex items-center flex-col flex-1">
        <div class="flex items-center w-full mb-4">
          <div class="flex items-center ml-auto mr-10 lg:mr-20">
            <input
              type="text"
              name="search"
              placeholder="Я ищу..."
              class="w-72 lg:w-96 px-5 py-1 rounded-lg border-2 border-slate-200 placeholder:text-slate-200"
            />
            <span class="inline-block px-5 py-2 -ml-2 rounded-md cursor-pointer bg-primary">
              <img src="/img/icons/search-header.svg" alt="иконка поиска" class="w-5" />
            </span>
          </div>

          <div class="flex items-center text-secondary">
            <NuxtLink to="tel:+992 95 800 0202" class="mr-4 font-bold">
              <img src="/img/icons/phone.svg" alt="иконка телефона" class="lg:mr-2 inline-block" />
              <span class="hidden lg:inline-block"> +992 95 800 0202 </span>
            </NuxtLink>

            <NuxtLink to="/cart" class="mr-4">
              <img src="/img/icons/cart.svg" alt="иконка корзины" />
            </NuxtLink>

            <a href="#" class="mr-4 lg:mr-8" @click.prevent="profileHandler">
              <img src="/img/icons/profile.svg" alt="иконка профиля" />
            </a>
          </div>
        </div>

        <nav class="w-full bg-primary">
          <ul class="flex items-center justify-end font-bold text-lg text-white">
            <li v-for="{path, name} in navLinks" :key="path">
              <NuxtLink :to="path" class="flex items-center px-4 py-3 lg:px-8 lg:py-4 rounded-xl">
                <DotsVerticalIcon v-if="path === '/'" class="w-5 mr-4" />
                {{ name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="flex flex-col p-4 mb-7 md:hidden">
      <div class="flex items-center justify-between mb-2">
        <NuxtLink to="/cart">
          <img src="/img/icons/cart.svg" alt="иконка корзины" />
        </NuxtLink>
        <NuxtLink to="/">
          <img src="/img/logo/mobile-logo.png" alt="Sof.tj logo" />
        </NuxtLink>
        <a href="#" @click.prevent="profileHandler">
          <img src="/img/icons/profile.svg" alt="иконка профиля" />
        </a>
      </div>

      <div class="flex items-center">
        <input
          type="text"
          name="search"
          placeholder="Я ищу..."
          class="w-full px-5 py-1 rounded-lg border-2 border-slate-200 placeholder:text-slate-200"
        />
        <span class="inline-block px-5 py-2 -ml-2 rounded-md cursor-pointer bg-primary">
          <img src="/img/icons/search-header.svg" alt="иконка поиска" class="w-5" />
        </span>
      </div>
    </div>

    <Teleport to="body">
      <GlobalModal :isVisible="isVisible" @changeVisability="isVisible = false">
        
        <h3 class="mb-16">
          {{ isLogin ? 'Войти' : 'Регистрация' }}
        </h3>

        <ElementInput v-if="isLogin === false" labelText="ФИО" inputName="name" class="mb-8" />
        <ElementInput v-if="isLogin === false" labelText="Почта" inputType="email" inputName="email" class="mb-8" />
        <ElementInput labelText="Номер телефона" inputType="tel" inputName="phone" class="mb-8" />
        <ElementInput labelText="Пароль" inputType="password" inputName="password" class="mb-8" />
        <ElementInput v-if="isLogin === false" labelText="Подтверждение пароля" inputType="password" inputName="confirm" class="mb-16" />

        <ElementButton class="w-full py-5 mb-8" darkmode>
          {{ isLogin ? 'Войти' : 'Зарегестрироваться' }}
        </ElementButton>

        <div class="text-center">
          <p class="inline-block mr-2">
            {{ isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?' }}
          </p>
          <a href="#" @click.prevent="isLogin = !isLogin" class="border-b border-black">
            {{ isLogin ? 'Зарегестрируйтесь' : 'Выполните вход' }}
          </a>
        </div>

      </GlobalModal>
    </Teleport>
  </header>
</template>

<script setup>
import {DotsVerticalIcon} from '@heroicons/vue/solid'

const router = useRouter()
const userState = useUser()

const navLinks = ref([
  {path: '/', name: 'Магазин'},
  {path: '/about', name: 'О нас'},
  {path: '/reviews', name: 'Отзывы'},
  {path: '/contacts', name: 'Контакты'},
])

const isVisible = ref(true)
const isLogin = ref(true)

const profileHandler = () => {
  if (userState.value.id) {
    return router.push('/profile')
  }
  isVisible.value = true
}
</script>

<style lang="postcss" scoped></style>
