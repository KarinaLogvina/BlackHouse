function scrollTo(to, duration) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById('up');
    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 500);
    }
});

  window.addEventListener('scroll', function() {
    up.hidden = (pageYOffset < document.documentElement.clientHeight);
});

document.getElementById('menu').addEventListener('click', (event) => {
    if(event.target.classList.contains('page')) {
        document.querySelectorAll('.page').forEach((e) => {
            e.classList.remove('select');
        })
        event.target.classList.add('select')
        if(event.target.id === 'nav_contacts') {
            showInformation();
        }
        if(event.target.id === 'nav_home') {
            showHome();
        }
        if(event.target.id === 'nav_about') {
            showAbout();
        }
    }

})

var slideIndex = 0;
showSlides();
  
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    if(!slides || !slides.length) return
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) { 
      slideIndex = 1;
    }

   slides[slideIndex-1].style.display = "block";
   setTimeout(showSlides, 25000);
}

const about = document.getElementById('about');
if (about) {about.onclick = () => {
    window.location.href = 'https://blackhouseclub.by/about/';
}
}

(function() {

    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('.navigation'),
  
      doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      }
    };
  
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
  }());

  const bookingForm = document.getElementsByClassName('booking-form');
  const subminButton = document.getElementsByClassName('send-button');
  const warning = document.getElementsByClassName('warning');
  const name = document.getElementById('name');
  const date = document.getElementById('date');
  const phone = document.getElementById('phone');

  (function order() {
    bookingForm[0].addEventListener('submit', (e) => {
        if(name.value.length <= 0) {
            warning[0].style.visibility= 'visible';
            e.preventDefault();
        } else {
            warning[0].style.visibility= 'hidden';
        }
        if(phone.value.length <= 0) {
            warning[1].style.visibility = 'visible';
            e.preventDefault();
        } else {
            warning[1].style.visibility= 'hidden';
        }
        if(date.value.length <= 0) {
            warning[2].style.visibility = 'visible';
            e.preventDefault();
        } else {
            warning[2].style.visibility= 'hidden';
        }
    })
}());

const booking = document.getElementById('booking');
const modalWrapper = document.getElementsByClassName('modal');
const closeButton = document.getElementById('close');

booking.onclick = () => {
    modalWrapper[0].style.display = 'flex';
    document.getElementsByTagName('main')[0].classList.add('filter');
}

closeButton.onclick = () => {
    modalWrapper[0].style.display = 'none';
    document.getElementsByTagName('main')[0].classList.remove('filter');
    bookingForm[0].reset();
}

document.getElementById('about').onclick = () => {
    showAbout();
    window.screenTop(0)
}

function showInformation() {
    document.getElementById('main_section').classList.add('hidden');
    document.getElementById('information_section').classList.remove('hidden');
    document.getElementById('about_section').classList.add('hidden');
}

function showHome() {
    document.getElementById('about_section').classList.add('hidden');
    document.getElementById('information_section').classList.remove('hidden');
    document.getElementById('main_section').classList.remove('hidden');
}

function showAbout() {
    document.getElementById('main_section').classList.add('hidden');
    document.getElementById('information_section').classList.add('hidden');
    document.getElementById('about_section').classList.remove('hidden');
}