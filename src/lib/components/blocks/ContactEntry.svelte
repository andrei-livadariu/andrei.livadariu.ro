<script lang="ts">
    import type {Snippet} from "svelte";

    const {label, children}: {label: string, children: Snippet} = $props();
</script>

<dt class="font-bold">{label}:</dt>
<dd>
    {@render children()}
</dd>
