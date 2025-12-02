<template>
    <nav>
        <slot />
    </nav>
</template>

<script setup lang="ts">
// Pure view component, no logic needed
</script>

<style scoped>
nav {
    display: flex;
    gap: 1em;
}
</style>
