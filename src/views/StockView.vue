<template>
    <div class="stock-view">
        <h1>Stock View</h1>
        <ListView :items="items" />
    </div>
</template>

<ListView :items="items" />
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ListView from '../components/molecules/ListView.vue'

interface Item {
    name: string
    amount: number
}

const items = ref<Item[]>([])

onMounted(async () => {
    const response = await fetch('/data.json')
    const data = await response.json()
    items.value = data.itms
})
</script>