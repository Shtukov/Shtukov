// Menu hamburger button toggle and menu nav toggle

// const menuBtn = document.querySelector('.menu-btn');
// const hamburger = document.querySelector('.menu-btn__burger');
// const navbar = document.querySelector('.nav');
// const menuNav = document.querySelector('.menu-nav');

// const navItems = document.querySelectorAll('.menu-nav__item');
// const section = document.querySelectorAll('section'); 

// let showMenu = false;

// menuBtn.addEventListener('click', () => {
//     toggleMenu();
// });

// function toggleMenu() {
//     if(!showMenu) {
//         hamburger.classList.add('open');
//         navbar.classList.add('open');
//         menuNav.classList.add('open');
//         navItems.forEach(item => item.classList.add('open'));

//         showMenu = true;
//     } else if (showMenu){
//         hamburger.classList.remove('open');
//         navbar.classList.remove('open');
//         menuNav.classList.remove('open');
//         navItems.forEach(item => item.classList.remove('open'));
        
//         showMenu = false;
//     }
// }

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const navbar = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const section = document.querySelectorAll('section'); 

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    hamburger.classList.toggle('open');
    navbar.classList.toggle('open');
    menuNav.classList.toggle('open');
    navItems.forEach(item => item.classList.toggle('open'));
});

document.querySelectorAll('.menu-nav__link').forEach( n => 
    n.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        menuBtn.classList.remove('open');
        hamburger.classList.remove('open');
        navbar.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
    }));

function activeMenu() {
    let length = section.length;
    while(--length && window.scrollY + 97 < section[length].offsetTop){}
    navItems.forEach(e => e.classList.remove('active'));
    navItems[length].classList.add('active');
}

activeMenu();
window.addEventListener('scroll', () => {
    activeMenu();
});
