<script lang="ts">
    import type {LanguageEntryText} from "$lib/data/cv";

    import TimelineEntry from "$lib/components/home/cv/TimelineEntry.svelte";

    const {language, level, europeanLevel, score}: LanguageEntryText = $props();
</script>

<TimelineEntry>
    {#snippet left()}
        <h4 class="h6 mb-2 text-primary uppercase font-bold">
            {language}
        </h4>
    {/snippet}

    {#snippet right()}
        <p>
            {level}
            {#if europeanLevel}
                / European Level {europeanLevel}
            {/if}
            {#if score}
                ({score})
            {/if}
        </p>
    {/snippet}
</TimelineEntry>