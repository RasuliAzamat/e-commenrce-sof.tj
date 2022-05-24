<template>
    <ul>
        <li
            v-for="{ id, name, query } in actions"
            :key="id"
            class="mb-4 last:mb-0 font-bold"
        >
            <NuxtLink
                :to="`/profile/${query}`"
                v-if="name === 'Заказы'"
                :class="{ isIndex }"
            >
                {{ name }}
            </NuxtLink>

            <NuxtLink v-else :to="`/profile/${query}`">
                {{ name }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>
const { isIndex } = defineProps({
    isIndex: {
        type: Boolean,
        default: false,
    },
});
const actions = useActions();
</script>

<style lang="css" scoped>
ul li a {
    color: #9a9a9a;
}
ul li a.active {
    color: #150802 !important;
}
ul li a.isIndex {
    color: #150802 !important;
}
</style>