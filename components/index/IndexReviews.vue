<template>
    <section class="container max-w-6xl px-4 ml-auto mr-8 mb-24">
        <h2 class="mb-5 text-danger">Отзывы</h2>

        <div class="flex items-center justify-between">
            <div
                v-for="{ id, author, text, date } in reviews"
                :key="id"
                class="mr-12"
            >
                <h3 class="text-primary">{{ author }}</h3>
                <small class="inline-block">{{ date }}</small>
                <p class="text-xs">{{ text }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const reviews = ref([
    {
        id: 1,
        author: "Муминшо Муминов",
        text: "Obsession with producing superior product is matched only by your. Thank you for the excellent customers service and attention. The fabrics are superchic, probably the best ones I've ever held in my hands.",
        date: "10.04.22",
        // date: new Date(Date.now()).toLocaleDateString('ru-RU'),
    },
    {
        id: 2,
        author: "Парвина Ашрафова",
        text: "Obsession with producing superior product is matched only by your. Thank you for the excellent customers service and attention. The fabrics are superchic, probably the best ones I've ever held in my hands.",
        date: "1.03.22",
        // date: new Date(Date.now()).toLocaleDateString("ru-RU"),
    },
]);
</script>

<style lang="scss" scoped>
</style>