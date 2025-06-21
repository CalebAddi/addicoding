<script>
    //@ts-nocheck
    import { onMount, onDestroy } from "svelte";
    import * as THREE from "three";
    import createLighting from "./components/scripts/lighting";
    import windowResizeHandler from "./components/scripts/windowResizeHandler";
    import mouseEventHandler from "./components/scripts/mouseEventHandler";
    import setStarfield from "./components/scripts/starfield";
    import handleObjectMovement from "./components/scripts/objectMoveHandler";

    const scene = new THREE.Scene();
    let container, animId, renderer, starfield, cleanMouseEvents, cleanResizeEvents, cleanObjMovement = null;
    let isDestroyed = false;

    // Performance tracking
    let lastTime = 0;
    const targetFps = 1000 / 60;
    const clock = new THREE.Clock();

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

            // Object Movement
            cleanObjMovement = handleObjectMovement(mouse, icoMesh, starfield, clock);

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

                if (cleanObjMovement && cleanObjMovement.update)
                {
                    cleanObjMovement.update();
                }

                composer.render();
                animId = requestAnimationFrame(animate);
            }
            animate(0);

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
            cleanObjMovement?.cleanup?.();
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
        z-index: 0;
        position: absolute;
        overflow: hidden;
    }
</style>