export default function handleObjectMovement(mouse, mesh, starfield, clock)
{
    let target = { x: 0, y: 0 };
    let icosTarget = { x: 0, y: 0 };
    let baseRotation = { x: 0, y: 0 };
    let baseIcosRotation = { x: 0, y: 0, z: 0 };

    const starSensitivity = 0.015;
    const icoSensitivity = 0.8;
    const starSpeed = 0.07;
    const icoSpeed = 0.5;
    const smoothing = 0.015;

    let isActive = true;

    const update = () => {
        if (!isActive) return;

        const delta = clock.getDelta();
        const elapsedT = clock.getElapsedTime();

        // Continous base rotation
        baseRotation.x += starSpeed * delta * 0.8;
        baseRotation.y += starSpeed * delta * 0.3;
        baseIcosRotation.x += icoSpeed * delta * 1.2;
        baseIcosRotation.y += icoSpeed * delta * 0.6;
        baseIcosRotation.z = Math.sin(elapsedT * 0.5) * 0.1;

        // Mouse movement handling
        if (mouse)
        {
            target.x += (mouse.x * starSensitivity - target.x) * smoothing;
            target.y += (mouse.y * starSensitivity - target.y) * smoothing;
            icosTarget.x += (mouse.x * icoSensitivity - icosTarget.x) * smoothing;
            icosTarget.y += (mouse.y * icoSensitivity - icosTarget.y) * smoothing;
        }

        if (starfield)
        {
            starfield.rotation.x = baseRotation.x + target.x;
            starfield.rotation.y = baseRotation.y + target.y;
            starfield.rotation.z += 0.001;
        }

        if (mesh)
        {
            mesh.rotation.x = baseIcosRotation.x + icosTarget.x;
            mesh.rotation.y = baseIcosRotation.y + icosTarget.y;
        }
    };

    const cleanup = () => {
        isActive = false;
    };

    return { update, cleanup };
}