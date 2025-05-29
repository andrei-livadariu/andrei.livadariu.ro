<script lang="ts">
import {m} from '$lib/paraglide/messages.js';
import age from "$lib/helpers/age.js";
import MeImage from "$lib/components/blocks/MeImage.svelte";
</script>

<header class="container py-4 mb-12 md:mb-24 md:py-6 print:mb-12 print:py-0">
    <div class="flex flex-col md:flex-row print:flex-row gap-6 lg:gap-16 print:gap-12 items-center">
        <div class="md:basis-5/12 lg:basis-1/3 print:basis-1/5 md:-mb-20 print:mb-0">
            <MeImage alt={m['site.name']()} />
        </div>
        <div class="md:basis-7/12 lg:basis-2/3 print:basis-4/5 font-mono">
            <div class="text-center md:text-start print:text-start md:mt-6 lg:mt-0">
                <h1 class="mb-2 font-bold whitespace-nowrap print:text-primary">
                    {m['site.name']()}
                </h1>

                <p>{m['site.tagline']()}</p>
            </div>

            <br />

            <ul class="flex flex-col gap-2 text-center md:text-start print:text-start">
                <li>
                    {m['header.age']({age: age(m['contact.age']())})}
                </li>
                <li>
                    {m['header.location']({location: m['contact.location']()})}
                </li>
                <li>
                <a href="tel:{m['contact.phone']().replace(/[^0-9+]/g, '')}" class="icon-link">
                    <span class="iconify iconify-inline mdi--phone"></span>
                    <span class="link-text">
                        {m['contact.phone']()}
                    </span>
                </a>
                </li>
                <li>
                    <a href="mailto:{m['contact.email']()}" class="icon-link">
                        <span class="iconify iconify-inline mdi--envelope"></span>
                        <span class="link-text">
                            {m['contact.email']()}
                        </span>
                    </a>
                </li>
                <li class="hidden print:block">
                    <span class="iconify iconify-inline mdi--web"></span>
                    {m['contact.website']()}
                </li>
            </ul>
        </div>
    </div>
</header>