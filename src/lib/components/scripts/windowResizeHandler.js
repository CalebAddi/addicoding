export default function windowResizeHandler(camera, renderer, composer = null)
{
    const resizeHandle = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

        if (composer)
        {
            composer.setSize(window.innerWidth, window.innerHeight);
        }
    };

    window.addEventListener('resize', resizeHandle, false);

    return () => {
        window.removeEventListener('resize', resizeHandle);
    };
}