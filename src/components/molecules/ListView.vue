<template>
    <ul>
        <ListItem v-for="(item, index) in items" :key="index" :name="item.name" :amount="item.amount"
            :isAvailable="item.isAvailable" :onAddToCart="onAddToCart" />
    </ul>
</template>

<script setup lang="ts">
import ListItem from './ListItem.vue'
defineProps<{ items: { name: string; amount: number; isAvailable: boolean }[]; onAddToCart: (name: string) => void }>()
</script>
<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    border: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}
</style>
