<script lang="ts">
import {m} from '$lib/paraglide/messages.js';
import age from "$lib/helpers/age.js";
import ContactList from "$lib/components/blocks/ContactList.svelte";
import ContactEntry from "$lib/components/blocks/ContactEntry.svelte";
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

            <ContactList>
                <ContactEntry label={m['contact.location.label']()}>
                    {m['contact.location.value']()}
                </ContactEntry>
                <ContactEntry label={m['contact.age.label']()}>
                    {age(m['contact.age.value']())}
                </ContactEntry>
                <ContactEntry label={m['contact.phone.label']()}>
                    <a href="tel:{m['contact.phone.value']().replace(/[^0-9+]/g, '')}">
                        {m['contact.phone.value']()}
                    </a>
                </ContactEntry>
                <ContactEntry label={m['contact.email.label']()}>
                    <a href="mailto:{m['contact.email.value']()}">
                        {m['contact.email.value']()}
                    </a>
                </ContactEntry>
                <ContactEntry label="{m['contact.website.label']()}" class="hidden print:block">
                    {m['contact.website.value']()}
                </ContactEntry>
            </ContactList>
        </div>
    </div>
</header>