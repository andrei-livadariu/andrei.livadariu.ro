<script lang="ts">
    import {m} from '$lib/paraglide/messages.js';

    import type {CVText} from "$lib/data/cv";

    import ParagraphText from "$lib/components/blocks/ParagraphText.svelte";
    import CvSection from "$lib/components/home/cv/CvSection.svelte";
    import JobEntry from "$lib/components/home/cv/JobEntry.svelte";
    import SkillEntry from "$lib/components/home/cv/SkillEntry.svelte";
    import EducationEntry from "$lib/components/home/cv/EducationEntry.svelte";
    import LanguageEntry from "$lib/components/home/cv/LanguageEntry.svelte";
    import Interests from "$lib/components/home/cv/Interests.svelte";

    const {cv}: {cv: CVText} = $props();
</script>

<h2 class="mb-2 print:hidden">
    {m['home.cv.title']()}_
</h2>

<div class="print:mb-12">
    <ParagraphText text={cv.statement} />
</div>

<div style="break-after: page">
    <CvSection title={cv.experience.title}>
        {#each cv.experience.entries as entry (entry.title)}
            <JobEntry {...entry} />
        {/each}
    </CvSection>
</div>

<CvSection title={cv.skills.title}>
    {#each cv.skills.entries as entry (entry.title)}
        <SkillEntry {...entry} />
    {/each}
</CvSection>

<CvSection title={cv.education.title}>
    {#each cv.education.entries as entry (entry.title)}
        <EducationEntry {...entry} />
    {/each}
</CvSection>

<CvSection title={cv.languages.title}>
    {#each cv.languages.entries as entry (entry.language)}
        <LanguageEntry {...entry} />
    {/each}
</CvSection>

<CvSection title={cv.volunteering.title}>
    {#each cv.volunteering.entries as entry (entry.title)}
        <JobEntry {...entry} />
    {/each}
</CvSection>

<CvSection title={cv.interests.title}>
    <Interests items={cv.interests.items} />
</CvSection>
