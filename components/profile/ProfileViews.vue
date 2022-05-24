<template>
    <component :is="components[component]"></component>
</template>

<script setup>
import ProfileAdress from "./ProfileAdress.vue";
import ProfileOrders from "./ProfileOrders.vue";
import ProfileSettings from "./ProfileSettings.vue";
import ProfileTabs from "./ProfileTabs.vue";

const route = useRoute();
const actions = useActions();

const components = {
    ProfileAdress,
    ProfileOrders,
    ProfileSettings,
    ProfileTabs,
};

const component = computed(() => {
    const action = actions.value.find((a) => a.query === route.params.action);
    return action?.component;
});
</script>

<style lang="scss" scoped>
</style>