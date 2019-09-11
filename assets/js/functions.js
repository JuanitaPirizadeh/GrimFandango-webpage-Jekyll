anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 500,
    delay: (el, i) => 40 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

const myAni = anime({
  targets: "#GrimHead",
  translateX: [-500, 1950],  
  rotate: "4turn",
  easing: "easeInOutQuart",
  duration: 3000,
  direction: "alternate",
  loop: true
});


const myAniFade = anime({
  targets: "#fade-animation",
  opacity: 0,
  duration: 2000,
  loop: true,
  delay: 5000
})

const myAniPop = anime({
    targets: "#pop-up",
    delay: 4000,
    scale: 7,
    duration: 500,
    easing: "linear",
    loop: true
  })


const myAniShake = anime({
  targets: ".shake-me",
  rotate: "4turn",
  duration: 3000,
  delay: 4000,
  loop: true
})


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");



  
  /* Sub title animation */
  function checkForVisibility() {
    var headers = document.querySelectorAll(".header");
  
    headers.forEach(function(header) {
      if (isElementInViewport(header)) {
        header.classList.add("headerVisible");
      } else {
        header.classList.remove("headerVisible");
      }
    });
  }
  
 
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return rect.top + rect.height / 2 < window.innerHeight;
  }
  
  if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
  }
  
  if (window.addEventListener) {
    addEventListener("DOMContentLoaded", titleActivity, false);
    addEventListener("load", titleActivity, false);
    addEventListener("scroll", titleActivity, false);
  }
  
  
 
 
