<script>
    //@ts-nocheck
    import { onMount } from "svelte";

    // Lazy load YT iframes
    let iframesLoaded = false;

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !iframesLoaded)
                {
                    loadIframes();
                    iframesLoaded = true;
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });

        const checkObserveJob = () => {
            const jobSection = document.querySelector('.jobs-container');
            if (jobSection) observer.observe(jobSection);
        };

        // Set delay to ensure navigation fully loads before lazy loading
        setTimeout(checkObserveJob, 30);
        return () => observer.disconnect();
    });

    function loadIframes()
    {
        const iframes = document.querySelectorAll('iframe[data-src]');
        iframes.forEach(iframe => {
            iframe.src = iframe.dataset.src;
            iframe.removeAttribute('data-src');
        });
    }
</script>

<main class="jobs-container">
    <h2>Professional Work</h2>

    <section class="job-section WR_Main">
        <h3>The Wayward Realms</h3>
        <h5 class="skill-tool">Skills/Tools: UE5, Blueprint Scripting, C++</h5>
        <p> As a Gameplay Programmer for the Wayward Realms, I am in charge of the development of the Water Systems and Weather Systems of the game. 
            I also play a part in developing the Stream Loading System that is used to help with optimization throughout the game world. 
        </p>

        <div class="wr-combat">
            <div class="combat-txt">
                <p> The purpose for the weather system is to implement weather that makes the world feel like it is constantly changing.
                    Having the world change in weather conditions and climate depending on the changing of the seasons really makes the world feel alive.
                </p>
            </div>

            <div class="video-wrapper">
                <iframe 
                    class="media-iframe combat-gif" 
                    data-src="https://www.youtube.com/embed/r3XXGVCEhNI?si=VQiiJNoZ0PtT3Qe-"
                    title="Wayward Realms Weather System Demo" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy">
                </iframe>
            </div>
        </div>

        <div class="water_system">
            <div class="water-txt">
                <p>Using Fluid Flux 2.0 and my built-in water system code that I created, I can construct a vast water system that is relatively low on fps.
                    A big part of building this system is developing the compatibility with the weather/time systems and creating the dynamics of the waves, tides, and boat physics depending on the time and weather conditions.
                    Depending on the weather conditions and time of day, your sea traversal may vary. Some places will only be traversable depending on when the tides are lower or higher.
                </p>
            </div>

            <div class="video-wrapper">
                <iframe 
                    class="media-iframe water-gif" 
                    data-src="https://www.youtube.com/embed/OwQqwBWH-lM?si=yg7W-i4MHf1FfRsc"
                    title="Wayward Realms Water System Demo" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy">
                </iframe>
            </div>
        </div>
    </section>

    <section class="job-section Ard_Main">
        <h3>Ardenfall</h3>
        <h5 class="skill-tool">Skills/Tools: Unity, C#</h5>
        <p>
            As a Gameplay Programmer for Ardenfall, I work on various bug fixes to help keep the game running in a smooth, bug free state.
            I also work on implementing small features that help make the game feel more robust and full of content.
        </p>

        <div class="ard-container">
            <div class="ard-txt">
                <p>
                    I deep dive into the game's code, utilizing my knowledge of C# to find and fix bugs that negatively impact the game's performance.
                    On top of problem solving and implementing effective fixes, I contribute details to make various systems, such as the leveling/skill point system and stamina system, more rounded and more immersive.
                </p>
            </div>

            <div class="video-wrapper">
                <iframe 
                    class="media-iframe ard-gif" 
                    data-src="https://www.youtube.com/embed/ac8To4rplk0?si=GERL7MCZkIGWF9vl" 
                    title="Ardenfall Gameplay Demo" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy">
                </iframe>
            </div>
        </div>
    </section>

    <section class="job-section OA_Main">
        <h3>Ocean Aero</h3>
        <h5 class="skill-tool">Skills/Tools: JavaScript, Laravel, PHP, MySQL, C, Python, UE5</h5>
        <p>
            As a Software Engineer, I worked on the Full Stack Development of the GUI for controlling the Triton, which is an autonomous sail/submergible boat.
            I also helped with creating simulations using UE5 to take Semantic Segmentation images for Deep Learning to train the AI to understand different obstacles for Obstacle Avoidance.
        </p>

        <div class="oa-container">
            <div class="oa-txt">
                <p>
                    Being on a small team of Software Engineers, we had multiple hats we would have to wear in order to get the job done.
                    Not only did I play a key role in adding onto the development of the robust Triton GUI, but I also helped with creating and implementing the plan of training the Triton through synthetic data.
                    Using UE5, we were able to fast track the machine learning process of the Triton, saving hundreds of man hours and thousands of dollars to get the outcome we needed. 
                </p>
            </div>

            <div class="video-wrapper oa-vid">
                <iframe 
                    class="media-iframe oa-img" 
                    data-src="https://www.youtube.com/embed/fybcM4BzEtA" 
                    title="Ocean Aero Triton Demo" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy">
                </iframe>
            </div>
        </div>
    </section>
</main>

<style>
    .job-section
    {
        background-color: rgba(24, 32, 41, 0.55);
        border: solid 2.5px rgba(215, 200, 200, 0.7);
    }

.skill-tool
{
    margin-top: -0.95em;
    margin-bottom: 4em;
    font-size: .85em;
    font-style: italic;
    font-weight: 300;
    letter-spacing: 1.4px;
    color: rgb(215, 200, 200, 0.88);
}

    .combat-gif, .water-gif, .ard-gif, .oa-img
    {
        position: relative;
        width: 400px;
        height: 225px;
        border: solid 1.5px rgba(215, 200, 200, 0.7);
        box-shadow: 5px 5px black;
    }

    .wr-combat
{
    margin-top: 10em;
}

.combat-gif
{
    margin-left: 40em;
    top: -12em;
}

.combat-txt
{
    position: relative;
    width: 450px;
}

.water_system
{
    margin-top: -5em;
}

.water-gif
{
    top: -6em;
    margin-right: 42em;
}

.water-txt, .oa-txt
{
    position: relative;
    margin-left: 40em;
    top: 7em;
    width: 450px;
}

.WR_Main
{
    border: solid 1.5px rgba(215, 200, 200, 0.7);
    box-shadow: 10px 10px black;
    margin-bottom: 1.5em;
    padding: 1em;
    margin-top: 5em;
}

.Ard_Main
{
    border: solid 1.5px rgba(215, 200, 200, 0.7);
    box-shadow: 10px 10px black;
    margin-bottom: 1.5em;
    padding: 1em;
    margin-top: 10em;
}

.ard-container
{
    margin-top: 12em;
}

.ard-gif
{
    margin-left: 40em;
    top: -12em;
}

.ard-txt
{
    position: relative;
    width: 450px;
}

.OA_Main
{
    border: solid 1.5px rgba(215, 200, 200, 0.7);
    box-shadow: 10px 10px black;
    margin-bottom: 1.5em;
    padding: 1em;
    margin-top: 7em;
}

.oa-container
{
    margin-top: 6em;
}

.oa-img
{
    top: -6em;
    margin-right: 42em;
}

@media screen and (max-width: 1220px)
{
    .combat-gif, .ard-gif, .water-gif, .oa-img
    {
        margin: 0em;
    }
    .combat-txt, .water-txt, .ard-txt, .oa-txt
    {
        margin: 0em;
        width: auto;
    }
    .combat-txt, .ard-txt
    {
        top: 8em;
    }
    .water-txt, .oa-txt
    {
        top: 17em;
    }

    .WR_Main, .OA_Main
    {
        padding-bottom: 7em;
    }
}

@media screen and (max-width: 1000px)
{
    .ard-txt
    {
        top: 10em;
    }
}

@media screen and (max-width: 860px)
{
    .combat-gif, .water-gif, .ard-gif, .oa-img
    {
        width: 100%;
        height: auto;
    }

    .ard-container
    {
        margin-top: 6em;
    }

    .oa-container
    {
        margin-top: -3em;
    }
}

@media screen and (max-width: 600px) 
{
    .combat-txt, .ard-txt
    {
        top: 6.5em;
    }
    .water-txt, .oa-txt
    {
        top: 16.5em;
    }
}

@media screen and (max-width: 480px)
{
    .video-wrapper
    {
        margin-top: 4em;
    }

    .ard-gif
    {
        margin-top: 1em;
    }

    .oa-img
    {
        margin-top: 4em;
    }
}
</style>