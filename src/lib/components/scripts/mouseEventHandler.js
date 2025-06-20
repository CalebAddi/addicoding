export function mouseEventHandler(mouse)
{
    const mouseMoveHandle = (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', mouseMoveHandle, false);

    return () => {
        window.removeEventListener('mousemove', mouseMoveHandle);
    };
} 

export function handleObjectMovement(mouse, mesh, starfield)
{
    let target = { x: 0, y: 0 };
    let icosTarget = { x: 0, y: 0 };

    // Update starfield and mesh positions based on mouse movement
    const tick = () => {
        if (mesh)
        {
            
        }
    }
}