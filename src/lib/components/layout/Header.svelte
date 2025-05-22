<script lang="ts">
import age from "$lib/helpers/age.js";
import ContactList from "$lib/components/blocks/ContactList.svelte";
import ContactEntry from "$lib/components/blocks/ContactEntry.svelte";
import MeImage from "$lib/components/blocks/MeImage.svelte";
</script>

<header class="container py-4 mb-12 md:mb-24 md:py-6">
    <div class="flex flex-col md:flex-row gap-6 lg:gap-16 items-center">
        <div class="md:basis-5/12 lg:basis-1/3 md:-mb-20">
            <MeImage alt="Andrei Livadariu" />
        </div>
        <div class="md:basis-7/12 lg:basis-2/3 font-mono">
            <div class="text-center md:text-start md:mt-6 lg:mt-0">
                <h1 class="mb-2 font-bold whitespace-nowrap">
                    Andrei Livadariu
                </h1>

                <p>I make websites, apps, games, and other cool stuff</p>
            </div>

            <br />

            <ContactList>
                <ContactEntry label="Age">
                    {age(new Date('1990-02-12T00:00:00.000Z'))}
                </ContactEntry>
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
                <ContactEntry label="Location">
                    Bucharest, Romania
                </ContactEntry>
            </ContactList>
        </div>
    </div>
</header>