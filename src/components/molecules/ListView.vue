<template>
    <ul>
        <ListItem name="Test item" :amount="10" :isAvailable="true" :onAddToCart="onAddToCart"/>
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
<script lang="ts">
/**
    * ListView component
    * * Renders a list of items using the ListItem component.
    * @prop {Array<{ name: string; amount: number; isAvailable: boolean }>} items - The array of items to display.
    * @prop {(name: string) => void} onAddToCart - Function called when an item is added to the cart.
    * @example
    * <ListView :items="itemList" :onAddToCart="handleAddToCart" />
 */
export default {};
</script>