<script>
    import { onMount, onDestroy } from "svelte";
    import handleContactForms from "../scripts/contact";

    let contactCleanup = null;

    onMount(() => {
        const initContactHandle = () => {
            try
            {
                contactCleanup = handleContactForms();
            }
            catch (error)
            {
                console.error('Contact Form initializing error: ', error);
            }
        };

        setTimeout(initContactHandle, 0);
    });

    onDestroy(() => {
        try
        {
            if (contactCleanup && typeof contactCleanup === 'function') contactCleanup();
        }
        catch (error)
        {
            console.error('Contact Form cleanup error: ', error);
        }
    });
</script>

<main>
    <section>
        <h2>Contact</h2>

        <form method="POST" action="https://formsubmit.co/caleb.addi.77@gmail.com" name="contactForm">
            <!-- FormSubmit configuration -->
            <input type="hidden" name="_next" value="https://calebaddi.github.io/addicoding">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_template" value="table">

                <div class="fields">
                    <div class="field half">
                        <label for="name">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            required 
                            autocomplete="name"
                            placeholder="* Your name"
                            maxlength="100"
                        />
                    </div>

                    <div class="field half">
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            required 
                            autocomplete="email"
                            placeholder="* your.email@example.com"
                            maxlength="254"
                        />
                    </div>

                    <div class="field">
                        <label for="message">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            rows="6" 
                            required
                            placeholder="* Your message here..."
                            maxlength="2000"
                        ></textarea>
                    </div>
                </div>

                <ul class="actions">
                    <li>
                        <input 
                            type="submit" 
                            value="Send Message" 
                            class="primary submit-btn" 
                            style="margin-bottom: 1.7em;"
                            disabled
                        />
                    </li>
                    <li>
                        <input 
                            type="reset" 
                            value="Reset" 
                            class="reset-btn"
                        />
                    </li>
                </ul>
        </form>

        <ul class="icons">
            <li class="linkIcons"><a href="https://www.linkedin.com/in/caleb-addi/" target="_blank" rel="noopener noreferrer" class="icon brands" style="margin-left: -5em;" id="linkedin-icon" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin-in"></i></a></li>
            <li class="linkIcons"><a href="https://github.com/CalebAddi" target="_blank" rel="noopener noreferrer" class="icon brands" style="margin-right: -5em; margin-top: -1.1em;" id="github-icon" aria-label="GitHub">
                <i class="fa-brands fa-github"></i></a></li>
        </ul>
    </section>
</main>

<style>
    form 
    {
        margin: 0 0 2rem 0;
    }

    form > :last-child 
    {
        margin-bottom: 0;
    }

    form > .fields 
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: calc(100% + 0.001rem);
        margin: -1.5rem 0 2rem -1.5rem;
    }

    label 
    {
        color: rgb(215, 200, 200, 0.9);
        display: block;
        font-size: 0.8rem;
        font-weight: 300;
        letter-spacing: 0.2rem;
        line-height: 1.5;
        margin: 0 0 1rem 0;
        text-transform: uppercase;
    }

    form > .fields > .field 
    {
        flex-grow: 0;
        flex-shrink: 0;
        padding: 1.5rem 0 0 1.5rem;
        width: calc(100% - 1.5rem);
    }

    form > .fields > .field.half 
    {
        width: calc(50% - 0.75rem);
    }

    input[type="text"],
    input[type="email"],
    textarea 
    {
        appearance: none;
        transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
        background-color: transparent;
        border-radius: 4px;
        border: solid 1px #ffffff;
        color: inherit;
        display: block;
        outline: 0;
        padding: 0 1rem;
        text-decoration: none;
        width: 100%;
    }

    input[type="text"]:invalid,
    input[type="email"]:invalid,
    textarea:invalid 
    {
        box-shadow: none;
    }

    input[type="text"]:focus,
    input[type="email"]:focus,
    textarea:focus 
    {
        background: rgba(255, 255, 255, 0.075);
        border-color: #ffffff;
        box-shadow: 0 0 0 1px #ffffff;
    }

    input[type="submit"].submit-btn,
    input[type="reset"].reset-btn
    {
        transition: transform .7s ease;
        padding: 0.62em;
        background-color: rgba(141, 136, 136, 0.8);
    }

    input[type="submit"].submit-btn:focus,
    input[type="reset"].reset-btn:focus
    {
        padding: 0.8em;
        background: rgba(255, 255, 255, 0.075);
    }

    input[type="submit"].submit-btn
    {
        transition: background-color 0.3s ease, transform 0.7s ease !important;
    }

    input[type="submit"].submit-btn:hover,
    input[type="reset"].reset-btn:hover 
    {
        transform: scale(1.1);
    }

    input[type="text"],
    input[type="email"]
    {
        height: 2.75rem;
    }

    textarea 
    {
        padding: 0.75rem 1rem;
    }

    ::-webkit-input-placeholder 
    {
        color: rgba(255, 255, 255, 0.5) !important;
        opacity: 1.0;
    }

    :-moz-placeholder 
    {
        color: rgba(255, 255, 255, 0.5) !important;
        opacity: 1.0;
    }

    ::-moz-placeholder 
    {
        color: rgba(255, 255, 255, 0.5) !important;
        opacity: 1.0;
    }

    :-ms-input-placeholder 
    {
        color: rgba(255, 255, 255, 0.5) !important;
        opacity: 1.0;
    }
</style>