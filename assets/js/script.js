let iconMenu = document.getElementById('icon-menu');
let nav = document.querySelector('nav');
let link = document.querySelectorAll('nav ul li');

// ECOUTE LES CLICK SUR LE MENU NAV
link.forEach( (links) =>{
    links.addEventListener('click', removeToggle);
});

// ANIMATION MENU DE NAVIGATION
function removeToggle () {
    nav.classList.toggle('left');
}
iconMenu.addEventListener('click', removeToggle);

// MENU FIXED AU SCROLL
let menu = document.querySelector('.menu');

function menuScroll () {
    
    if (window.scrollY >= 25) {
        menu.style.backgroundColor = "#fff";
        menu.style.boxShadow = "0 0 10px rgba(85, 85, 85, 0.397)";
    } else {
        menu.style.backgroundColor = "transparent";
        menu.style.boxShadow = "initial";
        
    }
}
menuScroll();
window.addEventListener('scroll', menuScroll);

// SCROLL TOP
let scrollTop = document.querySelector('.scrollTop');

function scrollTopPosition () {
    if (window.scrollY >= 400) {
        scrollTop.style.opacity="1";
        scrollTop.style.transform='translateY(0)';
    } else if (window.scrollY == 0) {
        scrollTop.style.opacity="0";
        scrollTop.style.transform='translateY(30px)';
    }
}

function scrollToTop () {
    window.scroll(0,0);
}
scrollTop.addEventListener('click', scrollToTop);
window.addEventListener('scroll', scrollTopPosition);


// ANIMATION NOMBRES SECTION ABOUT
const ra = 1;

const opt = {
    root: null,
    rootMargin: '0px',
    threshold: ra
}

const about = function (entries, observer) {
    entries.forEach ((entry) => {
        if (entry.intersectionRatio == ra) {

            let numbers = document.querySelectorAll('.num');
            let interval = 3000;

            numbers.forEach((numbers) => {
                let startValue = 0;
                let endValue = parseInt(numbers.getAttribute('data-val'));
                let duration = Math.floor(interval/endValue);
                let counter = setInterval(() => {
                    startValue += 1;
                    numbers.textContent = startValue + '+';
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            })

            observer.unobserve(entry.target);

        } 
    })
}

const obs = new IntersectionObserver(about, opt);
obs.observe(document.querySelector('.about__data'));


// ANIMATION BAR DE PROGRESSION
// Section skill
let skill = document.querySelector('.skill');

// les bars de progression
let photoshop = document.querySelector('.photoshop .pourcent');
let html = document.querySelector('.html .pourcent');
let illustrator = document.querySelector('.illustrator .pourcent');
let css = document.querySelector('.css .pourcent');
let effect = document.querySelector('.effect .pourcent');
let js = document.querySelector('.js .pourcent');

// fonction pour l'animation des bar de progression
function checkPositionSkill() {

    if (skill.getBoundingClientRect().top - window.innerHeight <= 0) {
        photoshop.classList.add('bar-progress-photoshop');
        html.classList.add('bar-progress-html');
        illustrator.classList.add('bar-progress-illustrator');
        css.classList.add('bar-progress-css');
        effect.classList.add('bar-progress-effect');
        js.classList.add('bar-progress-js');
    }
}

window.addEventListener('scroll', checkPositionSkill);


// ANIMATION AU DEFILEMENT
const ratio = .1;

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach((entry)=> {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        } 
    })

}
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach((reveals) => {
    observer.observe(reveals);
})



// SWIPER POUR SECTION NEWS
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      630: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1030: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
