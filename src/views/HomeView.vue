<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MarkdownView from '../components/molecules/MarkdownView.vue'

const markdownContent = ref('')

onMounted(async () => {
  const response = await fetch(import.meta.env.BASE_URL + 'data.md')
  markdownContent.value = await response.text()
})
</script>

<template>
  <MarkdownView :data-md="markdownContent" />
</template>
