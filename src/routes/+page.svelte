<script lang="ts">
    import { page } from '$app/state';

    import {MetaTags} from 'svelte-meta-tags';
    import {m} from '$lib/paraglide/messages.js';

    import {getLocale, baseLocale} from "$lib/paraglide/runtime";

    import {cvsByLanguage, type CVText} from "$lib/data/cv";

    import Intro from "$lib/components/home/Intro.svelte";
    import Cv from "$lib/components/home/Cv.svelte";

    const locale = getLocale();
    const cv = (cvsByLanguage[locale] ?? cvsByLanguage[baseLocale]) as CVText;

    const baseUrl = m['contact.website.value']();
</script>

<MetaTags
    title={m['site.name']()}
    description={m['site.tagline']()}
    openGraph={{
        type: 'website',
        url: baseUrl + page.url.pathname.replace(/\/$/, ''),
        title: m['site.name'](),
        description: m['site.tagline'](),
        images: [
            {
                url: `${baseUrl}/andrei-livadariu-meta.jpg`,
                width: 630,
                height: 630,
                alt: m['site.name'](),
            },
        ],
    }}
/>

<section class="container print:hidden">
    <Intro />
</section>

<hr class="my-12 border-gray-300 print:hidden" />

<section class="container pb-12">
    <Cv cv={cv} />
</section>