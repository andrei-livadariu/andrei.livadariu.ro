<script lang="ts">
    import type {Snippet} from "svelte";

    const {title, children}: {title: string, children: Snippet} = $props();
</script>

<div class="mt-12 print:mt-4">
    <h3 class="h5 uppercase font-bold text-zinc-500 mb-6 tracking-[0.25rem]">
        {title}
    </h3>

    {@render children()}
</div>