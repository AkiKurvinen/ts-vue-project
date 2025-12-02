<template>
    <ul>
        <ListItem v-for="(item, index) in items" :key="index" :name="item.name" :amount="item.amount" />
    </ul>
</template>

<script setup lang="ts">
import ListItem from '../atoms/ListItem.vue'
defineProps<{ items: { name: string; amount: number }[] }>()
</script>
