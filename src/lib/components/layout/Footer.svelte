<script lang="ts">
    import ContactList from "$lib/components/blocks/ContactList.svelte";
    import ContactEntry from "$lib/components/blocks/ContactEntry.svelte";
</script>

<footer class="container py-6 center-block">
    <h2 class="mb-6 text-center">Get in touch_</h2>

    <div class="center-block mb-6">
        <ContactList>
            <ContactEntry label="Phone">
                <a href="tel:+40724390309">
                    (+40) 724 390 309
                </a>
            </ContactEntry>
            <ContactEntry label="Email">
                <a href="mailto:andrei@livadariu.ro">
                    andrei@livadariu.ro
                </a>
            </ContactEntry>
            <ContactEntry label="LinkedIn">
                <a href="https://www.linkedin.com/in/mihai-andrei-livadariu-92857057/" target="_blank" rel="nofollow noopener">
                    Andrei Livadariu
                </a>
            </ContactEntry>
            <ContactEntry label="GitHub">
                <a href="https://github.com/andrei-livadariu" target="_blank" rel="nofollow noopener">
                    andrei-livadariu
                </a>
            </ContactEntry>
        </ContactList>
    </div>

    <p class="text-center font-mono opacity-50">
        This site is built using SvelteKit and Tailwind.
        <br />
        © {new Date().getFullYear()} Andrei Livadariu
    </p>
</footer>