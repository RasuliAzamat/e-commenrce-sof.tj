<template>
    <div class="flex flex-col min-h-screen">
        <GlobalHeader class="mb-10" />

        <main>
            <slot />
        </main>

        <GlobalFooter class="mt-auto" />
    </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
.modal {
    width: 510px !important;
}
</style>