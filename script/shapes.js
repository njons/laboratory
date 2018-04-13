//-------------------------------------------
// GENERATE RANDOM PULSATING ANIMATION: CIRCLES
// -------------------------------------------

// 1. grab a random number generator from stack overflow
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. target the circles that you want to animate
const circles = document.querySelectorAll('.circle');

// write a function where all shapes are looped thugh and siigned an animation each
circles.forEach(function (circle, index){
  // stuff your random number in a variable
  const randomNum = random(-1000, 1000);

  // grab the animation javascript from MDN web docs
  circle.animate([
    // keyframes
    { transform: `translateY(${randomNum}%)`  },
    { transform:  `scale(${randomNum}deg)`},
    { transform:  `translateX(${randomNum}%)`}
  ], {
    // timing options
      // use the index value in the array to set an individual delay to each animation
    delay: `${randomNum}` * index,
    duration: 10000,
    iterations: Infinity
  });

})
