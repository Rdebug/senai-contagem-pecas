var menu = document.querySelector('.c-nav-toggle__menu');

$(document).ready(function () {
    $('.c-hero__wrapper').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        infinite: true,
        arrows: false
    });
})

function abrirMenu() {
    setTopo();
    menu.style.display = 'flex';
    $(window).bind('scroll', setTopo);
}

function fecharMenu() {
    menu.style.display = 'none';
}
function setTopo() {
    $(window).scrollTop(0);
}

