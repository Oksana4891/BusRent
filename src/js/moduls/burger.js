    //   Burger menu screen <= 768

    const burger = document.querySelector('#burger');
    const burgerMenu = document.querySelector('.burger-menu');
    
    burger.onclick = function () {
        burger.classList.toggle('burger_active');
        burgerMenu.classList.toggle('is-active');
    };

    burgerMenu.onclick = function () {
        burger.classList.toggle('burger_active');
        burgerMenu.classList.toggle('is-active');
    };

    