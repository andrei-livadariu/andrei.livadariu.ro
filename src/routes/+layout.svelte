<script lang="ts">
    import '@fontsource-variable/roboto';
    import '@fontsource-variable/roboto-mono';

    import Background from "$lib/components/blocks/Background.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
    import Header from "$lib/components/layout/Header.svelte";
    import Navbar from "$lib/components/layout/Navbar.svelte";

    import '../app.css';

	let { children } = $props();
</script>

<Navbar title="Andrei Livadariu" />

<Background>
    <div class="pt-20 -mt-20 md:pt-0 md:mt-0">
        <Header />
    </div>
</Background>

{@render children()}

<Background>
    <Footer />
</Background>