<script>
    import Canvas from './lib/Canvas.svelte'
    import Navbar from './lib/components/apps/Navbar.svelte';
    import Resume from './lib/components/apps/Resume.svelte';
    import Jobs from './lib/components/apps/Jobs.svelte';

    import { onMount, onDestroy } from "svelte";
    import siteNavigation from "./lib/components/scripts/navigation";

    let navCleanup = null;

    onMount(() => {
        const initNavigation = () => {
            try
            {
                navCleanup = siteNavigation();
            }
            catch (error)
            {
                console.error("Error initializing site navigation: ", error);
            }
        };
        requestAnimationFrame(initNavigation);
    });

    onDestroy(() => {
        try
        {
            if (navCleanup && typeof navCleanup === 'function') navCleanup();
        }
        catch (error)
        {
            console.error("Error during onDestroy call: ", error);
        }
    });
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</svelte:head>

<main class="app-container">
    <div class="navbar">
        <Navbar />
    </div>

    <div class="main">
        <!-- Home -->
        <article id="resume">
            <Resume />
        </article>

        <!-- Professional Work -->
        <article id="professional_work">
            <Jobs />
        </article>
    </div>

    <!-- Three.js Background Canvas -->
    <div class="canvas">
        <Canvas />
    </div>
</main>

<style>
    .navbar
    {
        position: relative;
        width: 100%;
        z-index: 1;
        overflow: hidden;
    }

    .canvas
    {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1; 
    }

    #resume
    {
        position: relative;
        z-index: 2;
    }

        #professional_work, #personal_work, #about, #contact
    {
        display: grid;
        margin-top: 5em;
        z-index: 1;
        backdrop-filter: blur(5px);
    }

    article
    {
        contain: layout style;
        will-change: auto;
    }
</style>
