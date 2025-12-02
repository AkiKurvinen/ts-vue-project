<template>
    <li>
        {{ name }} <span>{{ amount }}</span>
    </li>
</template>

<script setup lang="ts">
defineProps<{ name: string; amount: number }>()
</script>
