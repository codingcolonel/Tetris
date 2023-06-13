// SET UP CANVAS AND 2D GRAPHICS CONTEXT
// CHANGE SIZE
let cnv = document.querySelector('canvas');
let ctx = cnv.getContext('2d');
cnv.width = 660;
cnv.height = 650;

// Global variables
let score = 10000;
let level = 20;
let lines = 47;
let frames = 0;
let interval = 48;

var lastTime = null;
var frameRate = 1000 / 60;

// Deltatime function
// requestAnimationFrame(deltaTime);
// function deltaTime() {
//   if (lastTime == null) {
//     lastTime = new Date().getTime();
//   }
//   var dt = new Date().getTime() - lastTime;
//   lastTime = new Date().getTime();
//   var updateCount = dt / frameRate;

//   for (var i = 0; i < updateCount; i++) {
//     update();
//   }

//   requestAnimationFrame(deltaTime);
// }

// let time_step = 1000 / 60,
//   delta = 0,
//   last_frame_time_ms = 0, // The last time the loop was run
//   max_FPS = 60; // The maximum FPS we want to allow

// window.requestAnimationFrame(gameLoop);
// function gameLoop(timestamp) {
//   // Throttle the frame rate.
//   if (timestamp < last_frame_time_ms + 1000 / max_FPS) {
//     requestAnimationFrame(gameLoop);
//     return;
//   }

//   delta += timestamp - last_frame_time_ms;
//   last_frame_time_ms = timestamp;

//   let num_update_steps = 0;
//   while (delta >= time_step) {
//     // update our game logic before draw things to canvas
//     update(time_step);
//     delta -= time_step;
//   }

//   // Call draw function to draw our logo to canvas
//   update();

//   // Call gameLoop recursevly
//   requestAnimationFrame(gameLoop);
// }

function animate() {
  // perform some animation task here
  update();

  // setTimeout(() => {
  requestAnimationFrame(animate);
  // }, 1000 / fps);
}
animate();

function update() {
  frames++;
  // console.log(frames);
  if (frames >= interval) {
    // console.log('update');
    frames = 0;
  }

  // console.log(frames);
  // if (frames % fps === 0) {
  //   frames = frames / fps;
  //   console.log(frames);
  // }
  // console.log(frames);
}

// setInterval(test, 1000);
// function test() {
//   // console.log('test');
// }

// let frame = 0;
// anim();

// function anim() {
//   window.requestAnimationFrame(anim);
//   frame++;
// }

// setInterval(() => {
//   console.log(frame);
// }, 1000);

// // TO DO
// // Add gui elements
// https://tetris.fandom.com/wiki/Scoring
