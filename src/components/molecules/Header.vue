<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <div class="wrapper">
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/stock">Stock</NavLink>
            </Nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import Nav from './Nav.vue'
import NavLink from '../atoms/NavLink.vue'
</script>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;
}

.logo {
    margin-bottom: 1em;
}

.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
