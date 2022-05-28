<template>
    <div>
        <div class="w-1/2 mx-auto">
            <div class="input-field">
                <label for="city">Город</label>
                <ElementInput inputName="city" :inputValue="user.city" />
            </div>
            <div class="input-field">
                <label for="street">Улица</label>
                <ElementInput inputName="street" :inputValue="user.street" />
            </div>
            <div class="input-field">
                <label for="phone">Телефон</label>
                <ElementInput
                    inpytType="tel"
                    inputName="phone"
                    :inputValue="user.phone"
                />
            </div>
            <div class="input-field">
                <label for="email">E-mail</label>
                <ElementInput
                    inpytType="email"
                    inputName="email"
                    :inputValue="user.email"
                />
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