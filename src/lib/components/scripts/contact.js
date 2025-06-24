//@ts-nocheck
export default function handleContactForms()
{
    const elements = {
        form: document.querySelector('form'),
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        message: document.getElementById('message'),
        submit: document.querySelector('.submit-btn'),
        reset: document.querySelector('.reset-btn')
    }

    if (!elements.form || !elements.name || !elements.email || !elements.message || !elements.submit)
    {
        console.warn('Contact form error: Required DOM elements not found');
        return () => {};
    }

    const config = {
        colors: {
            active: {
                background: 'rgb(224, 240, 227, 0.9)',
                color: 'rgba(141, 136, 136)'
            },
            inactive: {
                background: 'rgba(141, 136, 136, 0.8)',
                color: '#ffff'
            }
        },
    };

    function updateSubmitButton(isActive)
    {
        const colors = isActive ? config.colors.active : config.colors.inactive;
        elements.submit.style.backgroundColor = colors.background;
        elements.submit.style.color = colors.color;
        elements.submit.disabled = !isActive;
    }

    function validateInputs()
    {
        const isValid = elements.name.value.trim() && elements.email.value.trim() && elements.message.value.trim();
        updateSubmitButton(isValid);
    }

    function handleSubmit(e)
    {
        elements.submit.disabled = true;
        elements.submit.value = 'Sending...';

        // Reset button state after delay in case of form error
        setTimeout(() => {
            resetButtonState();
        }, 3000)
    }

    function resetButtonState()
    {
        elements.submit.disabled = false;
        elements.submit.value = 'Send Message';
        elements.message.value = '';
        updateSubmitButton(false);
    }

    function handleReset()
    {
        setTimeout(() => {
            resetButtonState();
        }, 0);
    }

    const inputHandler = () => validateInputs();

    elements.name.addEventListener('input', inputHandler);
    elements.email.addEventListener('input', inputHandler);
    elements.message.addEventListener('input', inputHandler);
    elements.form.addEventListener('submit', handleSubmit);
    elements.form.addEventListener('reset', handleReset);

    resetButtonState();
    
    return function cleanup()
    {
        elements.name?.removeEventListener('input', inputHandler);
        elements.email?.removeEventListener('input', inputHandler);
        elements.message?.removeEventListener('input', inputHandler);
        elements.form?.removeEventListener('submit', handleSubmit);
        elements.form?.removeEventListener('reset', handleReset);
    };
}