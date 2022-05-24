<template>
    <section class="max-w-appContainer px-8 mx-auto mb-20">
        <div class="flex">
            <div class="basis-3/4">
                <CartTable />
                <CartDelivery
                    :isDelivery="isDelivery"
                    @changeDelivery="isDelivery = !isDelivery"
                />
            </div>
            <div class="basis-1/4">
                <CartInfo />
            </div>
        </div>
        <CartForm :isDelivery="isDelivery" />
    </section>
</template>

<script setup>
const isDelivery = ref(true);
</script>

<style lang="scss" scoped>
</style>