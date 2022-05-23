<template>
    <button
        :class="[
            'rounded-sm font-bold text-white ',
            {
                'bg-black': darkmode,
                'bg-primary': !darkmode,
            },
        ]"
    >
        {{ text }}
    </button>
</template>

<script setup>
const { darkmode, text } = defineProps({
    darkmode: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
</style>