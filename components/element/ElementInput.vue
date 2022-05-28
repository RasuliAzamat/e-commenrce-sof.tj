<template>
  <div>
    <label v-if="labelText?.length" :for="inputName" class="block mb-2">
      {{ labelText }}
    </label>
    <ElementInput
      :type="inputType"
      :name="inputName"
      :value="inputValue"
      :placeholder="inputPlaceholder"
      class="w-full px-5 py-4 rounded-lg border-2 border-slate-200"
    />
  </div>
</template>

<script setup>
const {labelText, inputType, inputName, inputValue, inputPlaceholder} = defineProps({
  labelText: {
    type: String,
    default: null,
  },
  inputType: {
    type: String,
    default: 'text',
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
})
</script>

<style lang="postcss" scoped>
input[value] {
  @apply text-dark-gray;
}
</style>
