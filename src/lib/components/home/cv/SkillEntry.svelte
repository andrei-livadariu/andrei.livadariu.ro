<script lang="ts">
    import type {SkillEntryText} from "$lib/data/cv";

    import TimelineEntry from "$lib/components/home/cv/TimelineEntry.svelte";

    const {title, items}: SkillEntryText = $props();
</script>

<TimelineEntry>
    {#snippet left()}
        <h4 class="h6 mb-2 text-primary uppercase font-bold">
            {title}
        </h4>
    {/snippet}

    {#snippet right()}
        <p>
            {items.join(', ')}
        </p>
    {/snippet}
</TimelineEntry>