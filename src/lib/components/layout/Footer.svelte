<script lang="ts">
    import {m} from '$lib/paraglide/messages.js';
</script>

<footer class="container py-6 center-block">
    <h2 class="mb-6 text-center">{m['footer.heading']()}_</h2>

    <div class="center-block mb-6">
        <ul class="flex flex-col gap-2 text-center">
            <li>
                <a href="tel:{m['contact.phone']().replace(/[^0-9+]/g, '')}">
                    {m['contact.phone']()}
                </a>
            </li>
            <li>
                <a href="mailto:{m['contact.email']()}">
                    {m['contact.email']()}
                </a>
            </li>
            <li>
                <a href={m['contact.linkedin.link']()} target="_blank" rel="nofollow noopener">
                    {m['contact.linkedin.text']()}
                </a>
            </li>
            <li>
                <a href={m['contact.github.link']()} target="_blank" rel="nofollow noopener">
                    {m['contact.github.text']()}
                </a>
            </li>
        </ul>
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