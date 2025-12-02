<template>
    <div class="markdown-view" v-html="compiledHtml"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'
const props = defineProps<{ dataMd: string }>()
const compiledHtml = computed(() => props.dataMd ? marked.parse(props.dataMd) : '')
</script>

<style scoped>
.markdown-view {
    max-width: 700px;
    margin: 2em auto;
    padding: 2em;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.markdown-view h1,
.markdown-view h2,
.markdown-view h3 {
    margin-top: 1.5em;
}

.markdown-view p {
    margin: 1em 0;
}
</style>
