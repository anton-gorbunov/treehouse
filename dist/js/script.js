document.addEventListener('DOMContentLoaded',() => {
    //hamburger
    const hamburger = document.querySelector('.header__hamburger'),
          headerMenu = document.querySelector('.header__wrapper'),
          menuLinks = document.querySelectorAll('.header__link'),
          menuOverlay = document.querySelector('.header__overlay');
          socialLinks = document.querySelectorAll('.header__icons a');

    hamburger.addEventListener('click',() => {
        headerMenu.classList.toggle('header__wrapper_active');
        hamburger.classList.toggle('header__hamburger_active');
        menuOverlay.classList.toggle('header__overlay_active');
    });

    function removeMenuActiveClasses(){
        headerMenu.classList.remove('header__wrapper_active');
        hamburger.classList.remove('header__hamburger_active');
        menuOverlay.classList.remove('header__overlay_active');
    }

    
    menuLinks.forEach(item =>{
        item.addEventListener('click',() => {
            removeMenuActiveClasses();
        });
    });

    socialLinks.forEach(item => {
        item.addEventListener('click',() => {
            removeMenuActiveClasses();
        });
    });
});
