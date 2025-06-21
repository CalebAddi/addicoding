<script>
    //@ts-nocheck
    import Canvas from './lib/Canvas.svelte'
    import Navbar from './lib/components/apps/Navbar.svelte';
</script>

<main>
    <div class="navbar">
        <Navbar />
    </div>
    <div class="canvas">
        <Canvas />
    </div>
</main>

<style>
    :global(body)
    {
        margin: 0;
    }
    
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
</style>
