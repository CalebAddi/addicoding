//@ts-nocheck
import { HemisphereLight, Vector2 } from "three";
import { RenderPass, UnrealBloomPass, EffectComposer } from "three/examples/jsm/Addons.js";

export default function createLighting(scene, camera, renderer)
{
    const renderPass = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 100);
    bloomPass.threshold = 0.1;
    bloomPass.strength = 1.8;
    bloomPass.radius = 0.8;
    bloomPass.exposure = 0.15;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(bloomPass);

    const hemilight = new HemisphereLight(0xffffff, 0x000000, 1);
    scene.add(hemilight);

    return composer;
}