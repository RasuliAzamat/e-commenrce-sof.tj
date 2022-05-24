<template>
    <form>
        <h3 class="mb-6">Контактная информация</h3>

        <div v-if="user">
            <input type="text" name="lastName" :value="user.lastName" />
            <input type="text" name="name" :value="user.name" />
            <input type="tel" name="phone" :value="user.phone" />
            <input
                type="text"
                name="adress"
                :value="user.street"
                v-if="isDelivery == true"
            />
        </div>
        <div v-else class="mb-5">
            <input type="text" name="lastName" placeholder="Фамилия*" />
            <input type="text" name="name" placeholder="Имя*" />
            <input type="tel" name="phone" placeholder="Номер телефона*" />
            <input
                type="text"
                name="adress"
                placeholder="Адрес*"
                v-if="isDelivery == true"
            />
        </div>

        <ElementButton class="px-5 py-3"> Далее </ElementButton>
    </form>
</template>

<script setup>
const user = useUser();
const { isDelivery } = defineProps({
    isDelivery: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="postcss" scoped>
form input {
    @apply font-bold mr-5 mb-5;
}
</style>