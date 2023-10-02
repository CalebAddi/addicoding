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
<main>
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
            <h3>Three.js Globe Site</h3>
          </div>
          <div class="jsGame-main">
            <h3>Survive The Swarm</h3>
          </div>
        </article>

      <!-- About -->
        <article id="about">
          <h2>About</h2>
          <!-- <span class="image main"><img src="../src/images/pic03.JPG" alt="" /></span> -->
          <p>My name is Caleb, and I'm a Software Engineer.</p>

          <p>As a Software Engineer, I've worked on websites for various fields and businesses. I've
            worked on programming for personal game projects in Unreal Engine/Unity using C++ and C# as well as a few client game projects in
            JS. I also do Full Stack Development for the Ocean Aero TRITON GUI (using PHP/Laravel and JavaScript) along with building simulations for Machine Learning and more.</p>
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
              <li><input type="submit" value="Send Message" class="primary" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul class="icons">
            <li><a href="https://www.linkedin.com/in/caleb-addison-281370211" target="_blank" class="icon brands fa-linkedin"><span class="label">linkedin</span></a></li>
            <li><a href="https://github.com/CalebAddi" target="_blank" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
          </ul>
        </article>
    </div>
  </body>
</main>