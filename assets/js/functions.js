
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

