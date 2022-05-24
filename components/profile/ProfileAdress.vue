<template>
    <div>
        <div class="w-1/2 mx-auto">
            <div class="input-field">
                <label for="city">Город</label>
                <input type="text" name="city" :value="user.city" />
            </div>
            <div class="input-field">
                <label for="street">Улица</label>
                <input type="text" name="street" :value="user.street" />
            </div>
            <div class="input-field">
                <label for="phone">Телефон</label>
                <input type="tel" name="phone" :value="user.phone" />
            </div>
            <div class="input-field">
                <label for="email">E-mail</label>
                <input type="email" name="email" :value="user.email" />
            </div>
        </div>
    </div>
</template>

<script setup>
const user = useUser();
</script>

<style lang="postcss" scoped>
.input-field {
    @apply flex flex-col mb-16;
}
</style>