<script lang="ts">
    import type {Snippet} from "svelte";

    const { children }: {children: Snippet} = $props();
</script>

<div class="background">
    {@render children()}
</div>

<style>
    .background {
        position: relative;
        background-repeat: repeat;
        background-image: linear-gradient(44deg, rgba(1, 113, 176, .9) 34%, rgba(135, 255, 200, 0.85)), url(/images/background-optimized.svg);
        background-attachment: scroll, fixed;
        color: #fff;
    }
</style>