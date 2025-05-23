<script lang="ts">
    const {items}: {items: string[]} = $props();
</script>

<ul class="interests text-center flex flex-wrap gap-x-4 justify-center">
    {#each items as item (item)}
        <li class="flex-none">
            {item}
        </li>
    {/each}
</ul>

<style>
    .interests > li:not(:last-child)::after {
        content: "";
        display: inline-block;
        margin-left: 1rem;
        width: .75rem;
        height: .75rem;
        border: 2px solid var(--primary);
        border-radius: 50%;
        background: #fff;
    }
</style>