<script lang="ts">
    import type {Snippet} from "svelte";

    const {children}: {children: Snippet, separator?: string} = $props();
</script>

<dl class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
    {@render children()}
</dl>
