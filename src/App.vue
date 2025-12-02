<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/molecules/Header.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <footer>Created 2025</footer>
</template>

<style scoped>
main {
  max-width: 800px;
  width: 100%;
  border: 1px solid var(--primary-main);
  border-radius: 0.5em;
  padding: 1em;
  padding-top: 0;
}
</style>
