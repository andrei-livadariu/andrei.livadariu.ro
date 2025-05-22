<script lang="ts">
    const { alt }: {alt: string} = $props();
</script>

<enhanced:img
    src="../../assets/andrei-livadariu.jpg"
    {alt}
    class="aspect-square object-cover object-[0_-30px] rounded-lg md:shadow-xl/20 md:object-center md:aspect-[995/1366]"
    fetchpriority="high"
    sizes="(min-width: 72rem) 20vw, (min-width: 48rem) 33vw, 100vw"
/>