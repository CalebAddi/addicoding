//@ts-nocheck
import { BufferAttribute, BufferGeometry, Points, PointsMaterial } from "three";

export default function setStarfield(scene)
{
    const geometry = new BufferGeometry();
    const material = new PointsMaterial({
        color: 0x888888,
        size: 0.025,
        sizeAttenuation: true
    });
    const starCount = 55000;
    const starPos = new Float32Array(starCount * 3);
    const starfield = new Points(geometry, material);

    for (let i = 0; i < starCount * 3; i++)
    {
        starPos[i] = (Math.random() - 0.5) * 200;
    }

    geometry.setAttribute('position', new BufferAttribute(starPos, 3));
    starfield.sortParticles = true; // Ensure stars are rendered in correct order
    starfield.frustumCulled = false; // Disable frustum culling for starfield
    scene.add(starfield);

    return starfield;
}