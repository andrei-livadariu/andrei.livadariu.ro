<script lang="ts">
    import {m} from '$lib/paraglide/messages.js';
    import {locales, localizeHref, getLocale, setLocale} from "$lib/paraglide/runtime";
    import {page} from "$app/state";

    const currentLocale = getLocale();
    const otherLocales = locales.filter(locale => locale !== currentLocale);
</script>

<ul class="uppercase flex gap-x-4">
    {#each otherLocales as locale (locale)}
        <li>
            <a href={localizeHref(page.url.pathname, {locale}).replace(/\/$/, '')}
               hreflang={locale}
               class="no-underline py-2 inline-block"
               onclick={() => setLocale(locale)}
            >
                {m.language_name({}, {locale})}
            </a>
        </li>
    {/each}
</ul>