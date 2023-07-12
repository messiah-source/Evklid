// Burger menu
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__item');

burger.addEventListener('click', function () {
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__nav--active');
    menu.style.transition = 'transform .3s ease-in-out, visibility .3s ease-in-out';
    document.body.classList.toggle('stop-scroll');
})

// removing attribute STYLE from HTML
menu.addEventListener('transitionend', function () {
    if (!menu.classList.contains('header__nav--active')) {
        menu.removeAttribute('style');
    }
})

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('header__burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    })
})

// Swiper
let swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    a11y: {
        paginationBulletMessage: 'Слайд № {{index}}',
    }
});

// Search
let searchOpen = document.querySelector('.search__btn');
let search = document.querySelector('.search__form');
let searchClose = document.querySelector('.search__close');


searchOpen.addEventListener('click', function () {
  search.classList.add('search__show')
})

searchClose.addEventListener('click', function () {
  search.classList.remove('search__show')
})

// Tabs
let tabs = document.querySelector('.how__list');
let tabsBtn = document.querySelectorAll('.list__link');
let tabsContent = document.querySelectorAll('.how__block');

let tabsHandler = (path) => {
    tabsBtn.forEach(el => {el.classList.remove('list__link--active')}) // ;;;;;;;
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('list__link--active') // ` а не ' или "


    tabsContent.forEach(el => {el.classList.remove('how__block--active')})
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('how__block--active')
}

tabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('list__link')) {
        let tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
    }
})
