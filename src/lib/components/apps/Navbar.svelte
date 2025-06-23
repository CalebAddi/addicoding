<script>
    import { onMount } from "svelte";
    import siteNavigation from "../scripts/navigation";

    onMount(() => {
        try
        {
            siteNavigation();
        }
        catch (error)
        {
            console.error("Error initializing site navigation: ", error);
        }
    })
</script>

<main class="nav-container">
    <header id="header" class="header-container">
        <div class="content">
            <div class="inner">
                <h1>Dive Into My Portfolio</h1>
            </div>
        </div>
        <nav>
            <ul id="nav-btns" class="nav-buttons">
                <li class="nav-li longword-li"><a id="nav-link" href="#professional_work" data-text-small="Professional">Professional Work</a></li>
                <li class="nav-li longword-li"><a id="nav-link" href="#personal_work" data-text-small="Projects">Personal Projects</a></li>
                <li class="nav-li"><a id="nav-link" href="#about">About</a></li>
                <li class="nav-li"><a id="nav-link" href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</main>

<style>
    li
    {
        list-style: none;
    }

    .nav-container
    {
        margin-top: 9.5em;
        padding-bottom: 12em;
        background-color: rgba(24, 32, 41, 0.35);
        border: solid 2.5px rgba(215, 200, 200, 0.7);
    }

    .nav-buttons
    {
        display: flex;
        position: relative;
        margin-top: 7em;
        margin-left: -2em;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
    }

    .nav-li
    {
        float: left;
        text-align: center;
        padding: 12px 16px;
        text-decoration: none;
        font-size: 17px;
        border-bottom: solid 1px rgb(215, 200, 200, 0.7);
        border-top: solid 1px rgb(215, 200, 200, 0.7);
        color: inherit;
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

    .header-container
    {
        margin-top: 4em;
        padding-top: 2em;
    }

    @media screen and (max-width: 860px)
    {
        .nav-li.longword-li #nav-link
        {
        font-size: 0;
        visibility: hidden;
        }
        .nav-li.longword-li #nav-link::after
        {
        position: relative;
        content: attr(data-text-small);
        font-size: 17px;
        visibility: visible;
        line-height: 0.5rem;
        border-radius: 5em;
        box-shadow: inset 0 0 0 1px rgb(215, 200, 200, 0.95);
        padding: 1em;
        top: 0.3em;
        }
    }

    @media screen and (max-width: 600px) 
    {
        nav
        {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        }

        .nav-li
        {
            font-size: 10px;
        }

        .nav-li.longword-li #nav-link::after
        {
            font-size: 10px;
        }

        #nav-link
        {
            line-height: 1.25rem;
        }
	}

    @media screen and (max-width: 480px)
    {
        .nav-li
        {
            font-size: 8px;
        }

        .nav-li.longword-li #nav-link::after
        {
            font-size: 8px;
        }

        .nav-buttons
        {
        margin-left: -2.5em;
        }
    }
</style>