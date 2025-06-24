import { linear } from "svelte/easing";

//@ts-nocheck
export default function siteNavigation()
{
    const elements = {
        articles: document.querySelectorAll('article'),
        navLinks: document.querySelectorAll('.nav-li a'),
        appContainer: document.querySelectorAll('.app-container'),
        resumeArticle: document.getElementById('resume'),
        navButtons: document.querySelector('.nav-buttons')
    };

    let currVisibleArticle = null;
    let isInitialized = false;

    // Validate element existence
    if (!elements.articles.length || !elements.navLinks.length)
    {
        console.warn('Navigation: Required DOM elements are missing');
        return;
    }

    // Initialize articles visibility
    function initArticles()
    {
        const fragment = document.createDocumentFragment();

        elements.articles.forEach(article => {
            if (article.id !== 'resume') article.style.display = 'none';
        });

        adjustHomePage(false);
        isInitialized = true;
    }

    // Home page layout adjustment
    function adjustHomePage(isArticleVisible)
    {
        if (!elements.appContainer || !elements.resumeArticle) return;

        elements.appContainer[0].classList.toggle('article-active', isArticleVisible);
        elements.resumeArticle.style.display = isArticleVisible ? 'none' : 'block';
    }

    // Show the targeted article and hide others
    function showArticle(targetArticle)
    {
        // Hide all articles except home
        elements.articles.forEach(article => {
            if (article.id !== 'resume') article.style.display = 'none';
        });

        if (targetArticle && targetArticle.id !== 'resume')
        {
            targetArticle.style.display = 'block';
            currVisibleArticle = targetArticle;
            adjustHomePage(true);
        }
    }

    // Hide all articles and return to home view
    function hideAllArticles()
    {
        elements.articles.forEach(article => {
            if (article.id !== 'resume') article.style.display = 'none';
        });

        currVisibleArticle = null;
        adjustHomePage(false);
    }

    // Navigation link click handle
    function navClickHandler(e)
    {
        e.preventDefault();

        const targId = e.currentTarget.getAttribute('href').slice(1);

        if (!targId) return;

        const targArticle = document.getElementById(targId);

        // Toggle visibility if clicking the same article again
        if (targArticle === currVisibleArticle)
        {
            hideAllArticles();
            return;
        }

        // Show new article
        if (targArticle) showArticle(targArticle);
    }

    function attachEventListeners()
    {
        elements.navLinks.forEach(link => {
            link.addEventListener('click', navClickHandler, {passive: false});
        });
    }

    function removeEventListeners()
    {
        elements.navLinks.forEach(link => {
            link.removeEventListener('click', navClickHandler);
        });
    }

    // Cleanup method
    function cleanup()
    {
        removeEventListeners();
        currVisibleArticle = null;
        isInitialized = false;
    }

    // Initialize navigation
    try
    {
        initArticles();
        attachEventListeners();
        return cleanup;
    }
    catch (error)
    {
        console.error('Navigation initialization failed: ', error);
        return null;
    }
}