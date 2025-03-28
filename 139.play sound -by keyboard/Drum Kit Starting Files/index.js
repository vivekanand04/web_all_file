// //click any drum to get respective sound
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var kaun_sa_drum_click_hua = this.innerHTML;
//     keyboardWala(kaun_sa_drum_click_hua);
//     button_blink(kaun_sa_drum_click_hua);
//   });
// }

// // //GYAN KI BAAT 1
// // document.addEventListener("keypress",function(){
// //    alert("user pressed a random button");             //bhai jab bhi tum koi key press karega ek pop ho jayega.
// //  })

// // //GYAN KI BAAT 2
// // document.addEventListener("keypress",function(event){
// //    console.log(event);     ////bhai jab bhi tum koi key press karega console me bta deg aki kaun sa key press kiya hia
// // })
// document.addEventListener("keypress", function (event) {
//   keyboardWala(event.key); ////bhai jab bhi tum koi key press karega console me bta deg aki kaun sa key press kiya hia
//   button_blink(event.key);
// });

// function keyboardWala(event1) {
//   switch (event1) {
//     case "w":
//       var audio = new Audio("sounds/cat1.mp3");
//       audio.play();
//       document.querySelectorAll(".w")[i].classList.toggle("cat");
//       break;
//     case "a":
//       var audio = new Audio("sounds/tom-2.mp3");
//       audio.play();
//       break;
//     case "s":
//       var audio = new Audio("sounds/tom-3.mp3");
//       audio.play();
//       break;
//     case "d":
//       var audio = new Audio("sounds/tom-4.mp3");
//       audio.play();
//       break;
//     case "j":
//       var audio = new Audio("sounds/crash.mp3");
//       audio.play();
//       break;
//     case "k":
//       var audio = new Audio("sounds/kick-bass.mp3");
//       audio.play();
//       break;
//     case "l":
//       var audio = new Audio("sounds/snare.mp3");
//       audio.play();
//       break;

//       break;

//     default:
//       break;
//   }
// }
// //fading or animation of button
// function button_blink(data1) {
//   document
//     .querySelector("." + data1)
//     .classList.add(
//       "pressed"
//     ); /*added a class naemd presed in each button and button ke color ko fade karne
//                                                                  liye StylePropertyMap.css me pressed class ka use kiya hai*/
//   setTimeout(
//     function () //setTimeout function is used to regain originality,for more visit documentation
//     {
//       document.querySelector("." + data1).classList.remove("pressed");
//     },
//     100
//   );
// }
  
// Store static and GIF images
const drumImages = {
  w: { static: "images/cat_png.png", gif: "images/cat_dance.gif" },
  a: { static: "images/cat_static1.png", gif: "images/snare.gif" },
  s: { static: "images/tom1.png", gif: "images/tom1.gif" },
  d: { static: "images/tom2.png", gif: "images/tom2.gif" },
  j: { static: "images/tom3.png", gif: "images/tom3.gif" },
  k: { static: "images/tom4.png", gif: "images/tom4.gif" },
  l: { static: "images/crash.png", gif: "images/crash.gif" },
};

// Play sound and switch images
function keyboardWala(event1) {
  let audio;
  let drumButton = document.querySelector("." + event1);

  if (!drumButton || !drumImages[event1]) return;

  switch (event1) {
    case "w":
      audio = new Audio("sounds/cat1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "l":
      audio = new Audio("sounds/snare.mp3");
      break;
    default:
      return;
  }

  audio.play();

  // Change to GIF image
  drumButton.style.backgroundImage = `url('${drumImages[event1].gif}')`;

  // Restore static image after GIF duration (1 sec)
  setTimeout(() => {
    drumButton.style.backgroundImage = `url('${drumImages[event1].static}')`;
  }, 1000);
}

// Event listeners
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let key = this.innerHTML;
    keyboardWala(key);
    button_blink(key);
  });
}

document.addEventListener("keypress", function (event) {
  keyboardWala(event.key);
  button_blink(event.key);
});
