<script lang="ts">
    import type {JobEntryText} from "$lib/data/cv";

    import TimelineEntry from "$lib/components/home/cv/TimelineEntry.svelte";
    import ListText from "$lib/components/blocks/ListText.svelte";

    const {title, duration, company, description}: JobEntryText = $props();
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
            @ {company}
        </div>

        <ListText text={description} class="pl-4" style="list-style-type: '-  ';" />
    {/snippet}
</TimelineEntry>