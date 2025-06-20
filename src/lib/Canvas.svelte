<script>
    //@ts-nocheck
    import { onMount, onDestroy } from "svelte";
    import * as THREE from "three";
    import createLighting from "./components/scripts/lighting";
    import windowResizeHandler from "./components/scripts/windowResizeHandler";
    import { mouseEventHandler, handleObjectMovement } from "./components/scripts/mouseEventHandler";
    import setStarfield from "./components/scripts/starfield";

    const scene = new THREE.Scene();
    let container, animId, renderer, starfield, cleanMouseEvents, cleanResizeEvents, cleanObjMovement = null;
    let isDestroyed = false;

    // Performance tracking
    let lastTime = 0;
    const targetFps = 1000 / 60;

    onMount(() => {
        try
        {
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 4);

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.outputColorSpace = THREE.SRGBColorSpace;

            // Scene Lighting
            const composer = createLighting(scene, camera, renderer);

            // Mouse Events
            const mouse = { x: 0, y: 0 };
            cleanMouseEvents = mouseEventHandler(mouse);

            // Objects
            const geometry = new THREE.IcosahedronGeometry(1.7, 1);
            const geomMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe: true} );
            const icoMesh = new THREE.Mesh(geometry, geomMaterial);
            scene.add(icoMesh);

            // Starfield
            starfield = setStarfield(scene);

            // Canvas Container
            if (container)
            {
                container.appendChild(renderer.domElement);
            }

            // Animate
            function animate(time)
            {
                if (isDestroyed) return;

                // Frame rate controlling
                if (time - lastTime < targetFps)
                {
                    animId = requestAnimationFrame(animate);
                    return;
                }
                lastTime = time;

                composer.render();
                animId = requestAnimationFrame(animate);
            }
            animate(0);

            // Object Movement
            cleanObjMovement = handleObjectMovement(mouse, icoMesh, starfield);

            // Resize Window
            cleanResizeEvents = windowResizeHandler(camera, renderer, composer);
        }
        catch (error)
        {
            console.error("Failed to initialize scene: ", error);
            isDestroyed = true;
        }
    });

    onDestroy(() => {
        try
        {
            isDestroyed = true;

            animId && cancelAnimationFrame(animId);
            renderer?.dispose();
            cleanResizeEvents?.();
            cleanMouseEvents?.();
            scene?.clear();

            [container, animId, renderer, starfield, cleanMouseEvents, cleanResizeEvents, cleanObjMovement] = Array(7).fill(null);
        }
        catch (error)
        {
            console.warn("Error during cleanup: ", error);
        }
    });
</script>

<main>
    <div bind:this={container} class="canvas-container"></div>
</main>

<style>
    .canvas-container
    {
        overflow: hidden;
    }
</style>