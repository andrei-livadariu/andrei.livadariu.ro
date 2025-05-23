<script lang="ts">
    import LanguageSwitcher from "$lib/components/layout/LanguageSwitcher.svelte";

    const { title }: {title:string} = $props();
    let scrollY: number = $state(0);
    let isScrolled = $derived(scrollY > 0);
</script>

<svelte:window bind:scrollY={scrollY} />

<nav class="navbar font-mono py-2 md:py-4 {isScrolled ? 'bg-background shadow-xl/20' : ''} print:hidden">
    <div class="container">
        <div class="flex gap:4 lg:gap-12 items-center">
            <div class="flex-1">
                <div class="text-primary text-xl md:text-2xl {isScrolled ? '' : 'hidden'}">
                    {title}
                </div>
            </div>
            <div class={isScrolled ? '' : 'text-white'}>
                <LanguageSwitcher />
            </div>
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