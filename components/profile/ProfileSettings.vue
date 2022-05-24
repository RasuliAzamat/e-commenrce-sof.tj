<template>
    <div>
        <div class="w-1/2 mx-auto">
            <div class="input-field">
                <label for="name">ФИО</label>
                <input
                    type="text"
                    name="name"
                    :value="user.name"
                    class="profile-input"
                />
            </div>
            <div class="input-field">
                <label for="email">Почта</label>
                <input
                    type="email"
                    name="email"
                    :value="user.email"
                    class="profile-input"
                />
            </div>
            <div class="input-field">
                <label for="phone">Номер телефона</label>
                <input
                    type="tel"
                    name="phone"
                    :value="user.phone"
                    class="profile-input"
                />
            </div>
            <div class="input-field">
                <label for="password">Сменить пароль</label>
                <div class="relative">
                    <input
                        :type="isVisible ? 'text' : 'password'"
                        name="password"
                        :value="user.password"
                        class="profile-input w-full"
                    />
                    <button
                        class="absolute top-3.5 right-5"
                        @click="changeVisability"
                    >
                        <img
                            :src="`/img/icons/password-${
                                isVisible ? 'visible' : 'hidden'
                            }.svg`"
                            alt="Пароль открыт"
                        />
                    </button>
                </div>
            </div>
            <div class="input-field">
                <label for="confirm">Подвердить пароль</label>
                <div class="relative">
                    <input
                        :type="isVisible ? 'text' : 'password'"
                        name="confirm"
                        :value="user.password"
                        class="profile-input w-full"
                    />
                    <button
                        class="absolute top-3.5 right-5"
                        @click="changeVisability"
                    >
                        <img
                            :src="`/img/icons/password-${
                                isVisible ? 'visible' : 'hidden'
                            }.svg`"
                            alt="Пароль открыт"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const user = useUser();

const isVisible = ref(false);
const changeVisability = () => (isVisible.value = !isVisible.value);
</script>

<style lang="postcss" scoped>
.input-field {
    @apply flex flex-col mb-16;
}
</style>