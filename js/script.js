'use strict';

function toggleMenu(hide) {
    document.querySelector('.nav-mobile').classList.toggle('nav-mobile--hide', hide);
    // document.querySelector('.nav').classList.toggle('sidebar--mini', visible);
    // document.querySelector('.content-wrapper').classList.toggle('content-wrapper--max', visible);
}

function animeMenuHamburger(e) {
    e.currentTarget.classList.toggle('change');
}

document.querySelector('.menu-hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    animeMenuHamburger(e);
    toggleMenu()
  });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('.btn-toTop').style.display = 'block';
    } else {
        document.querySelector('.btn-toTop').style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.querySelector('.btn-toTop').addEventListener('click', topFunction);

(function () {
    toggleMenu(true);
})();