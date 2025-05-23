<script lang="ts">
    import {m} from '$lib/paraglide/messages.js';

    import ContactList from "$lib/components/blocks/ContactList.svelte";
    import ContactEntry from "$lib/components/blocks/ContactEntry.svelte";
</script>

<footer class="container py-6 center-block">
    <h2 class="mb-6 text-center">{m['footer.heading']()}_</h2>

    <div class="center-block mb-6">
        <ContactList>
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
            <ContactEntry label={m['contact.linkedin.label']()}>
                <a href={m['contact.linkedin.link']()} target="_blank" rel="nofollow noopener">
                    {m['contact.linkedin.value']()}
                </a>
            </ContactEntry>
            <ContactEntry label={m['contact.github.label']()}>
                <a href={m['contact.github.link']()} target="_blank" rel="nofollow noopener">
                    {m['contact.github.value']()}
                </a>
            </ContactEntry>
        </ContactList>
    </div>

    <p class="text-center font-mono opacity-50">
        {m['footer.built']()}
        <br />
        <a href="{m['footer.github_link']()}" target="_blank" rel="external nofollow noopener">
            {m['footer.code']()}
        </a>
        <br />
        © {new Date().getFullYear()} {m['site.name']()}
    </p>
</footer>