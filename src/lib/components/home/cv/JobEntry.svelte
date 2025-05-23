<script lang="ts">
    import type {JobEntryText} from "$lib/data/cv";

    import ParagraphText from "$lib/components/blocks/ParagraphText.svelte";
    import TimelineEntry from "$lib/components/home/cv/TimelineEntry.svelte";

    const {title, duration, company, description}: JobEntryText = $props();
</script>

<TimelineEntry>
    {#snippet left()}
        <h4 class="h6 mb-2 text-primary uppercase font-bold">
            {title}
        </h4>

        {#if duration}
            <p class="text-zinc-500 font-mono mb-2">
                {duration}
            </p>
        {/if}
    {/snippet}

    {#snippet right()}
        {#if company}
            <div class="h6 mb-2 text-primary">
                @ {company}
            </div>
        {/if}

        {#if description}
            <ParagraphText text={description} />
        {/if}
    {/snippet}
</TimelineEntry>