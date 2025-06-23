<script>
    //@ts-nocheck
    import Canvas from './lib/Canvas.svelte'
    import Navbar from './lib/components/apps/Navbar.svelte';
    import Resume from './lib/components/apps/Resume.svelte';
</script>

<main class="app-container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

    <div class="navbar">
        <Navbar />
    </div>

    <div class="main">
        <!-- Home -->
        <article id="resume">
            <Resume />
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
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
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
</style>
