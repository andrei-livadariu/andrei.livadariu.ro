<script lang="ts">
    const { text }: {text: string} = $props();

    const paragraphs = $derived(
        text
            .split("\n")
            .map(x => x.trim())
            .filter(x => x)
    );
</script>

{#each paragraphs as paragraph, i (i)}
    <p>{paragraph}</p>
{/each}
