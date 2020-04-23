
let btnPlay = document.getElementById('play');

//hidden accept block
document.getElementsByClassName('btn-accept')[0].addEventListener('click', (e) => {
    document.getElementsByClassName('accept')[0].style.bottom = "-400px";
    setTimeout(() => document.getElementsByClassName('accept')[0].style.display = "none", 1000);
});

//video
document.querySelector('video').controls = false;

btnPlay.addEventListener('click', (e) => {
    document.getElementsByClassName('text-on-video')[0].style.display = "none";
    btnPlay.style.display = "none";
    document.querySelector('video').controls = true;
    document.querySelector('video').play();
});

//section-5 carousel
let leftArrowSlider_1 = document.getElementById('left-arrow-sld-1');
let rightArrowSlider_1 = document.getElementById('right-arrow-sld-1');

$('#right-arrow-sld-1').click(function () {
    $('.variable').slick('slickNext');
});

$('#left-arrow-sld-1').click(function () {
    $('.variable').slick('slickPrev');
});

let i = 0;

let lines = document.querySelectorAll('.lines .line-scroll');
let blcoks = document.getElementsByClassName('blocks')[0];

leftArrowSlider_1.addEventListener('click', (e) => {
    lines[i].classList.remove('current');
    if (--i == -1) {
        i = 4;
    }
    lines[i].classList.add('current');
});

rightArrowSlider_1.addEventListener('click', (e) => {
    lines[i].classList.remove('current');
    if (++i == 5) {
        i = 0;
    }
    lines[i].classList.add('current');
});

window.addEventListener('scroll', function () {
    if(pageYOffset > 900) {
        document.querySelector('.strain:nth-child(1)').classList.add('animated', 'bounceInLeft');
        document.querySelector('.strain:nth-child(2)').classList.add('animated', 'bounceInUp');
        document.querySelector('.strain:nth-child(3)').classList.add('animated', 'bounceInRight');
    }
    if (pageYOffset > 2400) {
        document.querySelector('.section-4 #cannabis').classList.add('animated', 'fadeInUp');
    }
});

if (window.outerWidth < 400) {
    document.getElementsByClassName('section-2')[0].classList.remove('animated');
}


