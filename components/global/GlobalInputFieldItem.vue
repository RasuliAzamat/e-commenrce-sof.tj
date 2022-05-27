<template>
    <div>
        <label v-if="labelText.length" :for="inputName" class="block mb-2">
            {{ labelText }}
        </label>
        <input
            :type="inputType"
            :name="inputName"
            :value="inputValue ? inputValue : null"
            :placeholder="inputPlaceholder ? inputPlaceholder : null"
            class="w-full px-5 py-4 rounded-lg border-2 border-slate-200"
        />
    </div>
</template>

<script setup>
const { labelText, inputType } = defineProps({
    labelText: {
        type: String,
        default: null,
    },
    inputType: {
        type: String,
        default: "text",
    },
    inputName: {
        type: String,
        required: true,
    },
    inputValue: {
        type: String,
        default: null,
    },
    inputPlaceholder: {
        type: String,
        default: null,
    },
});
</script>

<style lang="postcss" scoped>
input[value] {
    @apply text-dark-gray;
}
</style>