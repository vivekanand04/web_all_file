
//play only one sound in each  drum

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();

//     });
// }


//change text oclor of drum
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         this.style.color = "white";    //yaha this us button ko trigger karega jisko hum click karenge

//     });
// }


//click any drum to get respective sound
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var kaun_sa_drum_click_hua = this.innerHTML;
        switch (kaun_sa_drum_click_hua) {
            case "w": var audio = new Audio("sounds/tom-1.mp3");
            audio.play();break;
            case "a":var audio = new Audio("sounds/tom-2.mp3");
            audio.play();break;
            case "s":var audio = new Audio("sounds/tom-3.mp3");
        audio.play();break;
            case "d":var audio = new Audio("sounds/tom-4.mp3");
        audio.play();break;
            case "j":var audio = new Audio("sounds/crash.mp3");
        audio.play();break;
            case "k":var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();break;
            case "l":var audio = new Audio("sounds/snare.mp3");
        audio.play();break;

                break;

            default:
                break;
        }

    });
}


document.addEventListener("keypress",function(event){
   console.log(event);
})


