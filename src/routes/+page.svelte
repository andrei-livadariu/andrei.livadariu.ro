<script lang="ts">
    import {m} from '$lib/paraglide/messages.js';

    import {getLocale, baseLocale} from "$lib/paraglide/runtime";

    import {cvsByLanguage, type CVText} from "$lib/data/cv";

    import Intro from "$lib/components/home/Intro.svelte";
    import Cv from "$lib/components/home/Cv.svelte";

    const locale = getLocale();
    const cv = (cvsByLanguage[locale] ?? cvsByLanguage[baseLocale]) as CVText;
</script>

<svelte:head>
    <title>{m['site.name']()}</title>
    <meta name="description" content={m['site.tagline']()} />
</svelte:head>

<section class="container print:hidden">
    <Intro />
</section>

<hr class="my-12 border-gray-300 print:hidden" />

<section class="container pb-12">
    <Cv cv={cv} />
</section>