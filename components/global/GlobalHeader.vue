<template>
    <header class="flex items-center">
        <NuxtLink to="/">
            <img src="/img/logo/header-logo.png" alt="Sof.tj logo" />
        </NuxtLink>

        <div class="flex items-center flex-col flex-1">
            <div class="flex items-center w-full mb-4">
                <div class="flex items-center ml-auto mr-20">
                    <input
                        type="text"
                        name="search"
                        placeholder="я ищу..."
                        class="
                            w-96
                            px-7
                            py-1
                            border-2 border-light
                            rounded-md rounded-tr-none rounded-br-none
                            placeholder:text-light
                        "
                    />
                    <span
                        class="
                            inline-block
                            px-5
                            py-2
                            -ml-1
                            rounded-md
                            cursor-pointer
                            bg-primary
                        "
                    >
                        <img
                            src="/img/icons/search-header.svg"
                            alt="иконка поиска"
                            class="w-5"
                        />
                    </span>
                </div>

                <div class="flex items-center text-secondary">
                    <NuxtLink to="tel:+992 95 800 0202" class="mr-4 font-bold">
                        <img
                            src="/img/icons/phone.svg"
                            alt="иконка телефона"
                            class="mr-2 inline-block"
                        />
                        +992 95 800 0202
                    </NuxtLink>

                    <NuxtLink to="/cart" class="mr-4">
                        <img src="/img/icons/cart.svg" alt="иконка корзины" />
                    </NuxtLink>

                    <a
                        @click.prevent="profileHandler"
                        to="#"
                        class="mr-8"
                    >
                        <img
                            src="/img/icons/profile.svg"
                            alt="иконка профиля"
                        />
                    </a>
                </div>
            </div>
            <nav class="w-full bg-primary">
                <ul
                    class="
                        flex
                        items-center
                        justify-end
                        font-bold
                        text-lg text-white
                    "
                >
                    <li v-for="{ path, name } in navLinks" :key="path">
                        <NuxtLink
                            :to="path"
                            class="flex items-center px-8 py-4 rounded-xl"
                        >
                            <DotsVerticalIcon
                                v-if="path === '/'"
                                class="w-5 mr-4"
                            />
                            {{ name }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        <Teleport to="body">
            <GlobalModal
                :isVisible="isVisible"
                @changeVisability="isVisible = false"
            >
                <h3 class="mb-16">Регистрация</h3>

                <GlobalInputFieldItem
                    labelText="ФИО"
                    inputName="name"
                    class="mb-8"
                />
                <GlobalInputFieldItem
                    labelText="Почта"
                    inputType="email"
                    inputName="email"
                    class="mb-8"
                />
                <GlobalInputFieldItem
                    labelText="Номер телефона"
                    inputType="tel"
                    inputName="phone"
                    class="mb-8"
                />
                <GlobalInputFieldItem
                    labelText="Пароль"
                    inputType="password"
                    inputName="password"
                    class="mb-8"
                />
                <GlobalInputFieldItem
                    labelText="Подтверждение пароля"
                    inputType="password"
                    inputName="confirm"
                    class="mb-16"
                />

                <ElementButton class="w-full py-5 mb-8" darkmode>
                    Зарегестрироваться
                </ElementButton>

                <div class="text-center">
                    <p class="inline-block mr-2">Уже есть аккаунт?</p>
                    <a href="/" class="border-b border-black">Выполните вход</a>
                </div>
            </GlobalModal>
        </Teleport>
    </header>
</template>

<script setup>
import {
    DotsVerticalIcon,
    SearchIcon,
    PhoneOutgoingIcon,
    ShoppingCartIcon,
    UserIcon,
} from "@heroicons/vue/solid";

const router = useRouter();
const userState = useUser();

const navLinks = ref([
    { path: "/", name: "Магазин" },
    { path: "/about", name: "О нас" },
    { path: "/reviews", name: "Отзывы" },
    { path: "/contacts", name: "Контакты" },
]);

const isVisible = ref(false);

const profileHandler = () => {
    if (userState.value.id) {
        return router.push("/profile");
    }
    isVisible.value = true;
};
</script>

<style lang="postcss" scoped>
</style>
