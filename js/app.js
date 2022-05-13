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
        social.classList.add('show');
    } else {
        goTop.classList.remove('visible');
        social.classList.remove('show');
    }
});

// Social button

const social = document.querySelector('.social');
const socialSection = document.querySelector('.social-icon')

social.addEventListener('click' ,() => {
    socialSection.classList.add('show');
    social.classList.add('hide');
});

socialSection.addEventListener('click' ,() => {
    socialSection.classList.remove('show');
    social.classList.remove('hide');
});
