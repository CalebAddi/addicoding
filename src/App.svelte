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
            <div class="wr-combat">
              <div class="combat-txt">
                <p>Develop and implement the logic and structure of the Combat System.
                  Implement combat that feels like it has weight for every impact you make on an enemy.
                  Every part of the enemy will have weight to how you kill enemies as well (hitting the AI in the head should do more damage than if it was hit in the shoulder).
                </p>
              </div>
              <img class="combat-gif" src="/src/assets/gifs/Combat_Example.gif" alt="Combat Example">
            </div>
            <div class="water_system">
              <div class="water-txt">
                <p>Develop and implement the logic and structure of the Water/Boat System.
                  Use a mix between Fluid Flux 2.0 and the built-in UE5 water system so that I can create a vast water system that is relatively low on fps.
                  A big part of building this system is developing the compatibility to the weather system and creating the dynamics of the waves and physics of the boats on the water depending on the weather conditions.
                  Depending on the weather conditions and time of day your sea traversal may vary. Some places will only be traversable depending on when the tides are lower or higher.
                </p>
              </div>
              <img class="water-gif" src="/src/assets/gifs/Water_BoatExample.gif" alt="Water Weather Change Example">
              <div class="water-gif02">
                <img class="water-gif" src="/src/assets/gifs/Weather_Change.gif" alt="Weather Change Example">
              </div>
            </div>
          </div>
          <!-- <div class="Ard_Main">
            <h3>Ardenfall</h3>
          </div> -->
          <div class="OA_Main">
            <h3>Ocean Aero</h3>
            <div class="oa-txt">
              <p>Worked on the Full Stack Development of the GUI for controlling the Triton.
                I also helped with creating simulations using UE5 to take Semantic Segmentation images for Deep Learning to train the AI to understand different obstacles for Obstacle Avoidance.
              </p>
            </div>
            <div class="oa-vid">
              <iframe class="oa-img" src="https://www.youtube.com/embed/fybcM4BzEtA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          <span class="image main"><img src="./src/images/pic03.JPG" alt="" /></span>
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

<style>
  main
  {
    background-color: rgb(24, 32, 41, .65);
    z-index: 0;
    padding-left: 4em;
    padding-right: 4em;
    border-bottom: solid 2.5px rgb(215, 200, 200, 0.7);
    border-top: solid 2.5px rgb(215, 200, 200, 0.7);
    border-left: solid 2.5px rgb(215, 200, 200, 0.7);
    border-right: solid 2.5px rgb(215, 200, 200, 0.7);
  }

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1; 
  }

  body
  {
    margin-top: 14em;
    padding: 0;
    position: relative;
  }

  header
  {
    margin-top: 4em;
    padding-top: 2em;
  }

  h1, h2
  {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
    letter-spacing: 2px;
    color: rgb(215, 200, 200, 0.88);
  }

  h2
  {
    font-size: 2.5em;
    border-bottom: solid 1.5px rgb(215, 200, 200, 0.7);
  }

  h3
  {
    font-family: fantasy;
    font-weight: 800;
    font-size: 1.7em;
    font-style: italic;
    letter-spacing: 1.2px;
  }

  .wr-combat
  {
    margin-top: 2em;
    margin-bottom: -8em;
  }

  .combat-gif
  {
    position: relative;
    width: 325px;
    height: 225px;
    border-bottom: solid 1.5px rgb(215, 200, 200, 0.7);
    border-top: solid 1.5px rgb(215, 200, 200, 0.7);
    border-left: solid 1.5px rgb(215, 200, 200, 0.7);
    border-right: solid 1.5px rgb(215, 200, 200, 0.7);
    left: 16em;
    top: -12em;
}

  .combat-txt
  {
    position: relative;
    left: -12em;
    margin-top: 5em;
    width: 450px;
}

  .water_system
  {
    margin-top: 2em;
  }

  .water-gif
  {
    position: relative;
    width: 325px;
    height: 225px;
    border-bottom: solid 1.5px rgb(215, 200, 200, 0.7);
    border-top: solid 1.5px rgb(215, 200, 200, 0.7);
    border-left: solid 1.5px rgb(215, 200, 200, 0.7);
    border-right: solid 1.5px rgb(215, 200, 200, 0.7);
    top: -15em;
    left: -16em;
  }

  .water-gif02
  {
    position: relative;
  }

  .water-txt
  {
    position: relative;
    left: 12em;
    top: 7em;
    width: 450px;
}

  .nav-buttons
  {
    display: flex;
    position: relative;
    padding: 5em;
    justify-content: center;
    align-items: center;
    float: left;
    color: rgb(215, 200, 200, 0.88);
    text-align: center;
    text-decoration: none;
    font-size: 17px;
  }

  .nav-li
  {
    float: left;
    color: rgb(215, 200, 200, 0.88);
    text-align: center;
    padding: 12px 16px;
    text-decoration: none;
    font-size: 17px;
    list-style-type: none;
		border-bottom: solid 1px rgb(215, 200, 200, 0.7);
    border-top: solid 1px rgb(215, 200, 200, 0.7);
		text-decoration: none;
		color: inherit;
  }

  .WR_Main
  {
    margin-top: 5em;
  }

  .OA_Main
  {
    margin-top: -4em;
  }

  .oa-img
  {
    position: relative;
    width: 350px;
    height: 240px;
    border-bottom: solid 1.5px rgb(215, 200, 200, 0.7);
    border-top: solid 1.5px rgb(215, 200, 200, 0.7);
    border-left: solid 1.5px rgb(215, 200, 200, 0.7);
    border-right: solid 1.5px rgb(215, 200, 200, 0.7);
  }

  .oa-vid
  {
    position: relative;
    left: 15em;
    margin-top: -10em;
    margin-bottom: 5em;
  }

  .oa-txt
  {
    position: relative;
    left: -13em;
    width: 450px;
    margin-top: 4em;
  }

  #nav-link 
  {
		border-radius: 5em;
		box-shadow: inset 0 0 0 1px rgb(215, 200, 200, 0.95);
		line-height: 5.25rem;
		text-align: center;
    padding: 1em;
    text-decoration: none;
    color: rgb(215, 200, 200, 0.88);
    transition: all .5s ease-in-out;
	}

  #nav-link:hover
  {
    font-size: 1.12em;
    background-color: rgb(102, 126, 131, .7);
  }

  article
  {
    z-index: 1;
    position: relative;
  }

  #professional_work
  {
    justify-content: center;
    display: grid;
    align-items: center;
    margin-top: -4em;
    margin-left: 12em;
  }

  #personal_work
  {
    justify-content: center;
    display: grid;
    align-items: center;
    margin-right: -43em;
    margin-top: -24em;
  }

  #about
  {
    justify-content: center;
    display: grid;
    align-items: center;
    margin-left: -1em;
    margin-top: -24em;
  }
</style>
