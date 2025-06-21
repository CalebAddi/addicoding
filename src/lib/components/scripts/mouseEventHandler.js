export default function mouseEventHandler(mouse)
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