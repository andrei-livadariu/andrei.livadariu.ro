<script lang="ts">
    import type {Snippet} from "svelte";

    const {left, right}: {left: Snippet, right: Snippet} = $props();
</script>

<div class="entry flex gap-6">
    <div class="md:hidden print:hidden">
        <div class="point"></div>
    </div>

    <div class="flex-1">
        <div class="md:flex print:flex gap-6">
            <div class="md:basis-1/4 print:basis-1/4 md:text-end print:text-end md:pb-12 print:pb-2">
                {@render left()}
            </div>

            <div class="hidden md:block print:block">
                <div class="point"></div>
            </div>

            <div class="flex-1 pb-12 print:pb-2">
                {@render right()}
            </div>
        </div>
    </div>
</div>

<style>
    .point {
        position: relative;
        height: 100%;
        top: .5rem;

        &::before,
        &::after {
            content: "";
            display: block;
            position: absolute;
            transform: translateX(-50%);
        }


        &::before {
            border-left: 2px solid var(--primary);
            height: 100%;
        }

        &::after {
            width: .75rem;
            height: .75rem;
            border: 2px solid var(--primary);
            border-radius: 50%;
            background: #fff;
        }
    }

    .entry:last-child .point::before {
        display: none;
    }
</style>