<script lang="ts">
    import type {Snippet} from "svelte";

    const {label, children, class: className = ''}: {label: string, children: Snippet, class?: string} = $props();
</script>

<dt class="font-bold {className}">{label}:</dt>
<dd class="{className}">
    {@render children()}
</dd>
