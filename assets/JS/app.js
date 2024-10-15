const readyButton = document.querySelector(".ready");
const landingPage = document.querySelector(".fadeOut");

readyButton.addEventListener('click', function(){
  landingPage.classList.add('fadeOutActive'); 

  setTimeout(() => {
    window.location.href = 'forside.html'; 
  }, 1000);
});
