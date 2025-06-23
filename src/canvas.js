window.onload = function()
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
    const homePage = document.querySelector('.home_container');
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

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('.reset-btn');

function CheckInputs()
{
  let nameTrim = name.value.trim();
  let emailTrim = email.value.trim();
  let msgTrim = message.value.trim();

  if (nameTrim && emailTrim && msgTrim) // if something is typed into these elements
  {
    submitBtn.style.backgroundColor = 'rgb(224, 240, 227, 0.9)'; 
    submitBtn.style.color = 'rgba(141, 136, 136)';
  }
  else
  {
    submitBtn.style.backgroundColor = 'rgba(141, 136, 136, 0.8)';
    submitBtn.style.color = '#ffff';
  }
}

name.addEventListener('input', CheckInputs);
email.addEventListener('input', CheckInputs);
message.addEventListener('input', CheckInputs);

document.querySelector('form').addEventListener('submit', function() {
  // revert button color after submit
  submitBtn.style.backgroundColor = 'rgba(141, 136, 136, 0.8)';
  submitBtn.style.color = '#ffff';
});

document.querySelector('form').addEventListener('reset', function() {
  submitBtn.style.backgroundColor = 'rgba(141, 136, 136, 0.8)';
  submitBtn.style.color = '#ffff';
});

export default app;