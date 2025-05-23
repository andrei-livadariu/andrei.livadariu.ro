<script lang="ts">
    import type {EducationEntryText} from "$lib/data/cv";

    import TimelineEntry from "$lib/components/home/cv/TimelineEntry.svelte";

    const {title, duration, institution, description}: EducationEntryText = $props();
</script>

<TimelineEntry>
    {#snippet left()}
        <h4 class="h6 mb-2 text-primary uppercase font-bold">
            {title}
        </h4>

        <p class="text-zinc-500 font-mono mb-2">
            {duration}
        </p>
    {/snippet}

    {#snippet right()}
        <div class="h6 mb-2 text-primary">
            @ {institution}
        </div>

        {#if description}
            <p>{description}</p>
        {/if}
    {/snippet}
</TimelineEntry>