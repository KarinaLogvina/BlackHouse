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
    const slides = document.getElementsByClassName("mySlides");
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