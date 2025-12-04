<template>
    <RouterLink :to="to" class="nav-link">
        <slot />
    </RouterLink>
</template>

<style scoped>
.nav-link {
    color: inherit;
    text-decoration: none;
    padding: 0.25em 0.5em;
    border-radius: 4px;
    transition: background 0.2s;
}

.nav-link.router-link-active {
    background: var(--primary-main);
    color: var(--primary-contrastText, #fff);
}

.nav-link:hover {
    background: var(--primary-light);
    color: var(--primary-dark);
}
</style>
<script lang="ts">
/**
 * NavLink component
 *
 * Renders a navigation link using Vue Router.
 *
 * @prop {string} to - The route path or name to navigate to.
 * @slot Default slot for link content (e.g., text, icons).
 *
 * @example
 * <NavLink to="/about">About</NavLink>
 */
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
};
</script>