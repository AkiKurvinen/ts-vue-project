<template>
    <button @click="onClick" class="icon-btn" type="button">
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps<{ onClick: () => void }>()
</script>

<style scoped>
.icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: 1.2em;
    color: var(--primary-contrastText);
    transition: color 0.2s, filter 0.2s;
}

.icon-btn:hover {
    color: var(--primary-light);
    filter: brightness(1.2);
}
</style>
