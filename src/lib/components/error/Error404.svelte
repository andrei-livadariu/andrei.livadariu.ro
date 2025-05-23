<script lang="ts">
    import {m} from '$lib/paraglide/messages.js';
    import {localizeHref, getLocale} from "$lib/paraglide/runtime";

    const locale = getLocale();
</script>

<div class="container text-center my-32">
    <h3 class="mb-8">
        {m['error.404.title']()}
    </h3>

    <a href={localizeHref('/', {locale}).replace(/\/$/, '') || '/'} class="border-2 border-[var(--primary)] no-underline uppercase font-mono py-1 px-3 md:py-2 md:px-6 rounded-lg print:hidden">
        {m['error.404.return']()}
    </a>
</div>