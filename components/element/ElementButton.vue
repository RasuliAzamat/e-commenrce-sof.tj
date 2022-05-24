<template>
    <button
        :class="[
            'rounded-xl font-bold text-white ',
            {
                'bg-black': darkmode,
                'bg-primary': !darkmode,
            },
        ]"
    >
        <slot />
    </button>
</template>

<script setup>
const { darkmode } = defineProps({
    darkmode: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="scss" scoped>
</style>