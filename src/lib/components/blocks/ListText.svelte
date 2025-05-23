<script lang="ts">
    const { text, ...rest }: {text: string, class?: string, style?: string} = $props();

    const items = $derived(
        text
            .split("\n")
            .map(x => x.trim())
            .filter(x => x)
    );
</script>

<ul {...rest}>
    {#each items as paragraph, i (i)}
        <li>{paragraph}</li>
    {/each}
</ul>
