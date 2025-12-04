<template>
    <div class="markdown-view" v-html="compiledHtml"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'
const props = defineProps<{ dataMd: string }>()

function injectBasePath(md: string, base: string) {
    // First, replace relative image sources: ![alt](relative)
    md = md.replace(/!\[([^\]]*)\]\((?!http|\/|#)([^)]+)\)/g, '![$1](' + base + '$2)');
    // Then, replace relative markdown links: [text](relative) with hash links for SPA navigation
    md = md.replace(/\[([^\]]+)\]\((?!http|\/|#)([^)]+)\)/g, function (match, text, link) {
        // If this is an image link, skip (already processed)
        if (match.startsWith('!')) return match;
        // Remove leading './' or '/' from link for clean hash
        const cleanLink = link.replace(/^\.\//, '').replace(/^\//, '');
        return `[${text}](#${cleanLink})`;
    });
    return md;
}

// Custom renderer to support hash navigation
marked.use({
    renderer: {
        link(this: any, { href, title, text }: { href?: string | null, title?: string | null, text: string }) {
            if (href && href.startsWith('#')) {
                return `<a href="${href}" onclick="window.location.hash='${href}';return false;">${text}</a>`;
            }
            return `<a href="${href ?? ''}"${title ? ` title="${title}"` : ''}>${text}</a>`;
        }
    }
});

const compiledHtml = computed(() => {
    if (!props.dataMd) return ''
    const base = import.meta.env.BASE_URL
    const processedMd = injectBasePath(props.dataMd, base)
    return marked.parse(processedMd)
})
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
<script lang="ts">
/**
 * MarkdownView component
 *
 * Renders parsed and styled Markdown content as HTML.
 *
 * @prop {string} dataMd - The raw markdown string to render.
 *
 * @example
 * <MarkdownView :dataMd="markdownContent" />
 */
export default {};
</script>