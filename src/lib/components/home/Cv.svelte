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

<div class="flex items-center mb-2">
    <h2 class="flex-1 print:hidden">
        {m['home.cv.title']()}_
    </h2>
    <div>
        <a href={cv.pdfPath} download class="bg-[var(--primary)] text-white no-underline uppercase font-mono py-1 px-3 md:py-2 md:px-6 rounded-full print:hidden">
            <span class="iconify iconify-inline mdi--download"></span>
            {m['home.cv.download']()}
        </a>
    </div>
</div>

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
