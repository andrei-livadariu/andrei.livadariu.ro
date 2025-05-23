<script lang="ts">
    import {m} from '$lib/paraglide/messages.js';

    import ParagraphText from "$lib/components/blocks/ParagraphText.svelte";
</script>

<h2 class="mb-2">{m['home.intro.title']()}_</h2>

<ParagraphText text={m['home.intro.text']()} />