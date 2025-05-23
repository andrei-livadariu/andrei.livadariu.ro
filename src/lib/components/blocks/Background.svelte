<script lang="ts">
    import type {Snippet} from "svelte";
    import bg from '$lib/assets/background-optimized.svg';

    const { children }: {children: Snippet} = $props();
</script>

<div class="background" style="background-image: linear-gradient(44deg, rgba(1, 113, 176, .9) 34%, rgba(135, 255, 200, 0.85)), url({bg});">
    {@render children()}
</div>

<style>
    .background {
        position: relative;
        background-repeat: repeat;
        background-attachment: scroll, fixed;
        color: #fff;
    }
</style>