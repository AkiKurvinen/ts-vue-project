<template>
    <nav>
        <slot />
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    gap: 1em;
}
</style>
<script lang="ts">
/**
 * Nav component
 *
 * Renders a navigation container for child navigation links or elements.
 *
 * @slot Default slot for navigation items (e.g., links, buttons).
 *
 * @example
 * <Nav>
 *   <NavLink to="/home">Home</NavLink>
 *   <NavLink to="/about">About</NavLink>
 * </Nav>
 */
export default {};
</script>