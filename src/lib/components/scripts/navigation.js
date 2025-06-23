//@ts-nocheck
export default function siteNavigation()
{
    const articles = document.querySelectorAll('article');
    let currVisibleArticle = null;

    articles.forEach(article => 
    {
        article.style.display = 'none';
    });

    const navLinks = document.querySelectorAll('.nav-li a');

    function HomePageAdjustment(isArticleVisible)
    {
        const homePage = document.querySelector('.app-container');
        const resumeArticle = document.getElementById('resume');

        if (homePage)
        {
            homePage.style.marginBottom = isArticleVisible ? '0' : '-10em';
            resumeArticle.style.display = isArticleVisible ? 'none' : 'block';
        }
    }
    HomePageAdjustment(false);

    navLinks.forEach(link =>
    {
        link.addEventListener('click', function(e)
        {
            e.preventDefault();

            articles.forEach(article =>
            {
                article.style.display = 'none';
            });

            HomePageAdjustment(false); //no articles available to show

            const navID = this.getAttribute('href').slice(1); //Getting the id from the href attribute
            const clickedArticle = document.getElementById(navID);
            const navBtns = document.querySelector('.nav-buttons');

            // Hide current visible article if we click on the link again
            if (clickedArticle)
            {
                if (clickedArticle === currVisibleArticle)
                {
                    clickedArticle.style.display = 'none';
                    currVisibleArticle = null;
                    HomePageAdjustment(false);

                    if (navID === 'about' && navBtns)
                    {
                        navBtns.style.marginLeft = '';
                    }
                }
                else
                {
                    if (currVisibleArticle)
                    {
                        currVisibleArticle.style.display = 'none';
                    }

                    clickedArticle.style.display = 'block';
                    currVisibleArticle = clickedArticle;
                    HomePageAdjustment(true); // articles are now visible
                }
            }
        });
    });
}