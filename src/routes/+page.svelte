<script lang="ts">
    import {m} from '$lib/paraglide/messages.js';

    import Intro from "$lib/components/home/Intro.svelte";
</script>

<svelte:head>
    <title>{m['site.name']()}</title>
    <meta name="description" content={m['site.tagline']()} />
</svelte:head>

<section class="container mb-12">
    <Intro />
</section>