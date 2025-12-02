<template>
    <RouterLink :to="to" class="nav-link">
        <slot />
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ to: string }>()
</script>

<style scoped>
.nav-link {
    color: inherit;
    text-decoration: none;
    padding: 0.25em 0.5em;
    border-radius: 4px;
    transition: background 0.2s;
}

.nav-link.router-link-active {
    background: var(--primary-main);
    color: var(--primary-contrastText, #fff);
}

.nav-link:hover {
    background: var(--primary-light);
    color: var(--primary-dark);
}
</style>
