<template>
    <div class="stock-view">
        <h1>Stock View</h1>
        <ListView :items="items" :onAddToCart="addToCart" />
    </div>
</template>

<ListView :items="items" />
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ListView from '../components/molecules/ListView.vue'

interface Item {
    name: string
    amount: number
    isAvailable: boolean
}

const items = ref<Item[]>([])

function addToCart(name: string) {
    alert(`${name} added to cart`)
}

onMounted(async () => {
    const response = await fetch(import.meta.env.BASE_URL + 'data.json')
    const data = await response.json()
    // Ensure isAvailable is present for each item
    items.value = (data.items ?? []).map((item: any) => ({
        name: item.name,
        amount: item.amount,
        isAvailable: typeof item.available === 'boolean' ? item.available : false
    }))
})
</script>