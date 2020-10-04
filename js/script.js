// Menu Toggler 
const navList = document.getElementById('navList');

document.getElementById('menuToggle').addEventListener('click', () => {
    document.body.classList.toggle('menu-toggler');
});
navList.addEventListener('click', (e) => {
    if (document.body.classList.contains('menu-toggler') && e.target.classList.contains('nav-link')) document.body.classList.remove('menu-toggler');
});

// Sticky navbar
const header = document.getElementById('header'),
      sticky = header.offsetTop,
      logo = document.getElementById('nav-logo'),
      sections = document.getElementsByTagName('section'),
      sectionLinks = navList.getElementsByClassName('nav-link');

//console.log(sections.length);


window.onscroll = function() {
    stickyF();
    navHandler();
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


function navHandler(){
    let j = 0;
    for ( let i = 0; i < sections.length - 1; ++i){
        if (sections[i].offsetTop <= window.pageYOffset && i != 2) {
            if (i < 2) j = i;
            else j = i - 1;
            
            if (!sectionLinks[j].classList.contains('active')){
                sectionLinks[j].classList.add('active');
                activeRemover(j);
            }
            
        }
    }
}

function activeRemover(j) {
    for ( let i = 0; i < sectionLinks.length; ++i) {
        if ( i != j && sectionLinks[i].classList.contains('active')) {
            sectionLinks[i].classList.remove('active');
        }
    }
}