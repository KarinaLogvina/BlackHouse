up.onclick = function() {
    window.scrollTo(pageXOffset, 0);
  };

  window.addEventListener('scroll', function() {
    up.hidden = (pageYOffset < document.documentElement.clientHeight);
});


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
   setTimeout(showSlides, 5000);
}

const about = document.getElementById('about');
if (about) {about.onclick = () => {
    window.location.href = 'https://blackhouseclub.by/about/';
}
}


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

}
