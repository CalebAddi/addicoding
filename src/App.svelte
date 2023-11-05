<script>
  import { onMount } from 'svelte';
  import { createScene } from "./canvas";
  let el;
  onMount(() => {
    createScene(el)
  });
</script>

<canvas bind:this={el}></canvas>
<!-- test -->
<main class="home_container">
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  </head>
  <header id="header">
    <div class="content">
      <div class="inner">
        <h1>Dive Into My Portfolio</h1>
      </div>
    </div>
    <nav>
      <ul id="nav-btns" class="nav-buttons">
        <li class="nav-li"><a id="nav-link" href="#professional_work">Professional Work</a></li>
        <li class="nav-li"><a id="nav-link" href="#personal_work">Personal Projects</a></li>
        <li class="nav-li"><a id="nav-link" href="#about">About</a></li>
        <li class="nav-li"><a id="nav-link" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <body>
    <div id="main">

      <!-- Professional Work -->
        <article id="professional_work">
          <h2>Professional Work</h2>

          <div class="WR_Main">
            <h3>The Wayward Realms</h3>
            <h5 class="skill-tool">Skills/Tools: UE5, Blueprint Scripting, C++</h5>
            <p> As a Gameplay Programmer for the Wayward Realms, I am in charge of the development of the Water Systems and Combat Systems of the game. 
              I also assist with the creation of the Dungeon ProcGen System as well as help with any optimization throughout the development cycle. 
            </p>

            <div class="wr-combat">
              <div class="combat-txt">
                <p> The purpose for the combat system is to implement combat that feels like it flows properly and has weight for every impact you make on an enemy. 
                  Every part of the enemy will have weight to how you kill enemies as well (hitting the AI in the head should do more damage than if it was hit in the shoulder).
                </p>
              </div>
              <!-- <img class="combat-gif" src="./src/assets/gifs/Combat_Example.gif" alt="Combat Example"> -->
              <iframe class="combat-gif" src="https://www.youtube.com/embed/THx1fhjyHio?si=l0w9Qc7PED4v8A6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="water_system">
              <div class="water-txt">
                <p>Using Fluid Flux 2.0 and my built-in water system code that I created, I can construct a vast water system that is relatively low on fps.
                  A big part of building this system is developing the compatibility with the weather/time systems and creating the dynamics of the waves, tides, and boat physics depending on the time and weather conditions.
                  Depending on the weather conditions and time of day, your sea traversal may vary. Some places will only be traversable depending on when the tides are lower or higher.
                </p>
              </div>
              <!-- <img class="water-gif" src="./src/assets/gifs/Water_BoatExample.gif" alt="Water Weather Change Example"> -->
              <iframe class="water-gif" src="https://www.youtube.com/embed/MmxUsly3S78?si=mnnEsbw3-GVcIPTK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="water-gif02">
                <!-- <img class="water-gif" src="./src/assets/gifs/Weather_Change.gif" alt="Weather Change Example"> -->
              </div>
            </div>
          </div>
          <div class="Ard_Main">
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
              <div>
                <iframe class="ard-gif" src="https://www.youtube.com/embed/ac8To4rplk0?si=GERL7MCZkIGWF9vl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div class="OA_Main">
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
              <div class="oa-vid">
                <iframe class="oa-img" src="https://www.youtube.com/embed/fybcM4BzEtA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </article>

      <!-- Personal Work -->
        <article id="personal_work">
          <h2>Personal Projects</h2>

          <div class="web_main">
            <h3 style="border-bottom: solid 1px rgb(215, 200, 200, 0.7); padding-bottom: 0.5em; text-shadow: 5px 5px black;">Simple Web Projects</h3>

            <div class="span_div">
              <span><a href = 'https://celadon-daifuku-b4fd9b.netlify.app/' target="_blank">
                <img class="span_img" src="assets/images/shopify.png" alt="Simple-React-Template" /></a>
                <h3>Admin Dashboard (Using ReactJS)</h3></span>
            </div>

            <div class="span_div">
              <span><a href = 'https://spiffy-liger-2e0760.netlify.app/' target="_blank">
                <img class="span_img" src="assets/images/planetearth.png" alt="threejs-globe" /></a>
                <h3>Earth Charity Hub (Using Three.js)</h3></span>
            </div>
          </div>
          <div class="jsGame-main">
            <h3 style="border-bottom: solid 1px rgb(215, 200, 200, 0.7); padding-bottom: 0.5em; text-shadow: 5px 5px black;">Simple JS Games</h3>
            
            <div class="span_div">
              <span><a href='assets/projects/FirstJSGame/index.html' target="_blank">
                <img class="span_img" src="assets/images/surviveswarm.png" alt="" /></a>
                <h3 class="h3_lilJS">Survive The Swarm</h3></span>
            </div>

            <div class="span_div">
              <span><a href='assets/projects/DiceGame/index.html' target="_blank">
                <img class="span_img" src="assets/images/diceroll.png" alt="" /></a>
                <h3 class="h3_lilJS">Dice Roll (Requires 2 Players)</h3></span>
            </div>

						<div class="span_div">
              <span><a href='assets/projects/GuessMyNumber/index.html' target="_blank">
                <img class="span_img" src="assets/images/guessnum.png" alt="" /></a>
                <h3 class="h3_lilJS">Guess The Number</h3></span>
            </div>
          </div>
        </article>

      <!-- About -->
        <article id="about">
          <h2>About</h2>
          <div class="about-container">
            <span><img class="span_img" src="assets/images/addiimg01.JPG" alt="" style="margin-bottom: 1em;"/></span>
            <p>My name is Caleb, and I'm a Software Engineer.</p>

            <p>As a Software Engineer, I work on various gameplay systems by developing them using both C++ and Blueprint Scripting for a game called The Wayward Realms. 
              Previously, I worked on various game projects while freelancing for clients, developing their ideas into playable games. 
              While freelancing, I also created websites for clients. I also worked for Ocean Aero where I worked on the Fullstack Development of the GUI for the Triton,
              which is their autonomous boat.
            </p>
          </div>
        </article>

      <!-- Contact -->
        <article id="contact">
          <h2>Contact</h2>

          <form method="POST" action="https://formsubmit.co/caleb.addi.77@gmail.com">
            <div class="fields">
              <div class="field half">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required/>
              </div>
              <div class="field half">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" required/>
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
            </div>
            <ul class="actions">
              <li><input type="submit" value="Send Message" class="primary submit-btn" style="margin-bottom: 1.7em;"/></li>
              <li><input type="reset" value="Reset" class="reset-btn"/></li>
            </ul>
          </form>
          <ul class="icons">
            <li class="linkIcons"><a href="https://www.linkedin.com/in/caleb-addison-281370211" target="_blank" class="icon brands" style="margin-left: -5em;" id="linkedin-icon">
              <i class="fa-brands fa-linkedin-in"></i></a></li>
              <li class="linkIcons"><a href="https://github.com/CalebAddi" target="_blank" class="icon brands" style="margin-right: -5em; margin-top: -1.1em;" id="github-icon">
                <i class="fa-brands fa-github"></i></a></li>
          </ul>
        </article>
    </div>
  </body>
</main>