<script>
    //@ts-nocheck
    import { onMount } from "svelte";

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

        const checkObserve = () => {
            const personalSection = document.querySelector('.personalGames-main');
            if (personalSection) observer.observe(personalSection);
        };
        setTimeout(checkObserve, 30);

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

<main>
    <h2>Personal Projects</h2>

    <div class="personalGames-main">
        <h3 style="border-bottom: solid 1px rgb(215, 200, 200, 0.7); padding-bottom: 0.5em; text-shadow: 5px 5px black;">Prototype Game Projects</h3>
            
        <div class="span_div">
            <span>
                <div class="project-desc">
                    <p style="padding-left: 0.5em; padding-right: 0.5em; color:rgb(215, 200, 200, 1); text-shadow: 1px 1px black;">
                        The White Pages is a horror game that I am working on in my spare time. 
                        It is inspired by games like Slenderman mixed with the Granny horror game series.
                        It's still early in development, but so far, I'm utilizing a hybrid approach of both c++ and blueprints together. I have implemented: Modular Interaction System, Advanced AI, Flashlight/Player Character Mechanics,
                        Randomization Mechanics (Items and Enemy Spawn Locations), Portal System, and Basic Test UI.
                    </p>

                    <h4 style="padding-top: 2em; padding-bottom: -2em;">
                        Project Link:  
                        <a href="https://github.com/CalebAddi/TheWhitePages" target="_blank" class="icon brands" id="github-icon" aria-label="The White Pages GitHub Repository">
                        <i class="fa-brands fa-github"></i></a>
                    </h4>
                </div>

                <iframe class="devclip-vid" 
                data-src="https://www.youtube-nocookie.com/embed/1Ynm_oknozI?si=cLNH-_F63IS_jGgD" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                loading="lazy">
                </iframe>

                <h3 class="h3_lilJS">The White Pages</h3>
                <p style="padding-left: 0.5em; padding-right: 0.5em; color:rgb(215, 200, 200, 1); text-shadow: 1px 1px black;">
                    Unreal Engine | C++ | Blueprints
                </p>
            </span>
        </div>
    </div>

    <div class="web_main">
        <h3 style="border-bottom: solid 1px rgb(215, 200, 200, 0.7); padding-bottom: 0.5em; text-shadow: 5px 5px black;">Simple Web Projects</h3>

        <div class="span_div">
            <span><a href = 'https://celadon-daifuku-b4fd9b.netlify.app/' target="_blank">
                <img class="span_img" src="assets/images/shopify.png" alt="Simple-React-Template" /></a>
                <h3>Admin Dashboard</h3>
            </span>

            <p style="padding-left: 0.5em; padding-right: 0.5em; color:rgb(215, 200, 200, 1); text-shadow: 1px 1px black;">
                React JS
            </p>
        </div>

        <div class="span_div">
            <span><a href = 'https://spiffy-liger-2e0760.netlify.app/' target="_blank">
                <img class="span_img" src="assets/images/planetearth.png" alt="threejs-globe" /></a>
                <h3>Earth Charity Hub</h3>
            </span>

            <p style="padding-left: 0.5em; padding-right: 0.5em; color:rgb(215, 200, 200, 1); text-shadow: 1px 1px black;">
                THREE JS
            </p>
        </div>
    </div>

    <div class="jsGame-main">
        <h3 style="border-bottom: solid 1px rgb(215, 200, 200, 0.7); padding-bottom: 0.5em; text-shadow: 5px 5px black;">Simple JS Games</h3>

        <div class="span_div">
            <span><a href='assets/projects/FirstJSGame/index.html' target="_blank">
                <img class="span_img" src="assets/images/surviveswarm.png" alt="" /></a>
                <h3 class="h3_lilJS">Survive The Swarm</h3>
            </span>
        </div>

        <div class="span_div">
            <span><a href='assets/projects/DiceGame/index.html' target="_blank">
                <img class="span_img" src="assets/images/diceroll.png" alt="" /></a>
                <h3 class="h3_lilJS">Dice Roll (Requires 2 Players)</h3>
            </span>
        </div>

		<div class="span_div">
            <span><a href='assets/projects/GuessMyNumber/index.html' target="_blank">
                <img class="span_img" src="assets/images/guessnum.png" alt="" /></a>
                <h3 class="h3_lilJS">Guess The Number</h3>
            </span>
        </div>
    </div>
</main>

<style>
    .span_div
    {
        border: solid 1.5px rgba(215, 200, 200, 0.7);
        box-shadow: 10px 10px black;
        margin-bottom: 2em;
    }

    .span_img
    {
        height: 400px;
        width: auto;
        margin-top: 7em;
        border: solid 1.5px rgba(215, 200, 200, 0.7);
    }

    .devclip-vid
    {
        height: 400px; 
        width: 750px; 
        margin-top: 4em; 
        border: solid 1.5px rgba(215, 200, 200, 0.7);
    }

    .jsGame-main, .web_main, .personalGames-main
    {
        margin-top: 7em;
        margin-bottom: 1em;
    }

    @media screen and (max-width: 1050px)
    {
        .span_img
        {
            max-width: 100%;
            height: auto;
        }
        .devclip-vid
        {
            max-width: 100%;
            height: 250px;
        }
    }
</style>