import './app.css';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

window.onload = function()
{
  const articles = document.querySelectorAll('article');
  let currVisibleArticle = null;

  articles.forEach(article => 
  {
    article.style.display = 'none';
  });

  const navLinks = document.querySelectorAll('.nav-li a');

  navLinks.forEach(link =>
  {
    link.addEventListener('click', function(e)
    {
      e.preventDefault();

      articles.forEach(article =>
      {
        article.style.display = 'none';
      });

      const navID = this.getAttribute('href').slice(1); //Getting the id from the href attribute
      const clickedArticle = document.getElementById(navID);
      const navBtns = document.querySelector('.nav-buttons');

      // Fix a stylization issue with the about section
      if (navID === 'about' && navBtns)
        navBtns.style.marginLeft = '4em';
      
      else 
        navBtns.style.marginLeft = '';

      // Hide current visible article if we click on the link again
      if (clickedArticle)
      {
        if (clickedArticle === currVisibleArticle)
        {
          clickedArticle.style.display = 'none';
          currVisibleArticle = null;

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
        }
      }
    });
  });
}

export default app;