<template>
    <li>
        {{ name }}
        <span class="item-details">{{ amount }}
            <IconButton v-if="isAvailable" :onClick="() => onAddToCart(name)" title="Add to cart">
                <CartIcon />
            </IconButton>
        </span>
    </li>
</template>

<script setup lang="ts">
// @ts-expect-error - no types available for vue-material-design-icons
import CartIcon from 'vue-material-design-icons/Cart.vue'
import IconButton from '../atoms/IconButton.vue'
defineProps<{ name: string; amount: number; isAvailable: boolean; onAddToCart: (name: string) => void }>()
</script>
<style scoped>
li {
    background-color: var(--primary-main);
    color: var(--primary-contrastText);
    padding: 0.5em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

span {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item-details {
    min-width: 50px;
}
</style>