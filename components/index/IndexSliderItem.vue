<template>
    <img :src="slides[activeSlideIndex].img" alt="" />
</template>

<script setup>
const { slides, activeSlideIndex } = defineProps({
    slides: Array,
    activeSlideIndex: {
        type: Number,
        default: 0,
    },
});
</script>

<style lang="scss" scoped>
</style>