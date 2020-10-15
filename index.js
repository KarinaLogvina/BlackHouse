up.onclick = function() {
    window.scrollTo(pageXOffset, 0);
  };

  window.addEventListener('scroll', function() {
    up.hidden = (pageYOffset < document.documentElement.clientHeight);
});

let burger = document.getElementById("burger-button");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("open");
  burger.classList.toggle("open");
});