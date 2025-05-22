<script lang="ts">
    const { title }: {title:string} = $props();
    let scrollY: number = $state(0);
    let isScrolled = $derived(scrollY > 0);
</script>

<svelte:window bind:scrollY={scrollY} />

<nav class="navbar font-mono py-2 md:py-4 {isScrolled ? 'bg-background shadow-xl/20' : ''}">
    <div class="container">
        <div class="text-primary text-xl md:text-2xl {isScrolled ? '' : 'hidden'}">
            {title}
        </div>
    </div>
</nav>

<style>
    .navbar {
        position: fixed !important;
        z-index: 1030;
        top: 0;
        left: 0;
        right: 0;

        transition: background-color .5s;
    }
</style>