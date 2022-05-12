// Preloader
const preloader = document.querySelector('#preloader');

preloader.classList.add('show-preloader');

window.addEventListener('load', () => {
    preloader.classList.remove('show-preloader');
});

//Btn go top

const goTop = document.querySelector('.go_top');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        goTop.classList.add('visible');
    } else {
        goTop.classList.remove('visible');
    }
});
