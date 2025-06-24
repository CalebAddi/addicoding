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

        <form method="POST" action="https://formsubmit.co/caleb.addi.77@gmail.com">
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
            <li class="linkIcons"><a href="https://www.linkedin.com/in/caleb-addi/" target="_blank" class="icon brands" style="margin-left: -5em;" id="linkedin-icon" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin-in"></i></a></li>
            <li class="linkIcons"><a href="https://github.com/CalebAddi" target="_blank" class="icon brands" style="margin-right: -5em; margin-top: -1.1em;" id="github-icon" aria-label="GitHub">
                <i class="fa-brands fa-github"></i></a></li>
        </ul>
    </section>
</main>