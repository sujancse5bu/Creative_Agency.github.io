// Menu Toggler 

document.getElementById('menuToggle').addEventListener('click', () => {
    document.body.classList.toggle('menu-toggler');
});

// Sticky navbar
const header = document.getElementById('header'),
      sticky = header.offsetTop,
      logo = document.getElementById('nav-logo');
console.log(sticky);
window.onscroll = function() {
    stickyF();
};

function stickyF() {
    if (window.pageYOffset >= sticky) {
        header.classList.add('after-scroll');
        logo.setAttribute('src', "img/logo2.png");
    } else {
        header.classList.remove('after-scroll');
        logo.setAttribute('src', "img/logo.png");
    }
}