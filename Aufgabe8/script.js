"use strict";
var s1 = new Audio("A.mp3");
var s2 = new Audio("C.mp3");
var s3 = new Audio("F.mp3");
var s4 = new Audio("G.mp3");
var s5 = new Audio("hihat.mp3");
var s6 = new Audio("kick.mp3");
var s7 = new Audio("laugh-1.mp3");
var s8 = new Audio("laugh-2.mp3");
var s9 = new Audio("snare.mp3");
var allSounds = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"];
window.addEventListener("load", function () {
    document.querySelector("#b1").addEventListener("click", function () { playSample(0); });
    document.querySelector("#b2").addEventListener("click", function () { playSample(1); });
    document.querySelector("#b3").addEventListener("click", function () { playSample(2); });
    document.querySelector("#b4").addEventListener("click", function () { playSample(3); });
    document.querySelector("#b5").addEventListener("click", function () { playSample(4); });
    document.querySelector("#b6").addEventListener("click", function () { playSample(5); });
    document.querySelector("#b7").addEventListener("click", function () { playSample(6); });
    document.querySelector("#b8").addEventListener("click", function () { playSample(7); });
    document.querySelector("#b9").addEventListener("click", function () { playSample(8); });
});
function playSample(ButtonNumber) {
    var sound = new Audio(allSounds[ButtonNumber]);
    sound.play();
    if (isrecording == true) {
        beat1.push(allSounds[ButtonNumber]);
        console.log(beat1);
    }
}
var beat1 = ["Sounds/kick.mp3", "Sounds/snare.mp3", "Sounds/hihat.mp3"];
document.querySelector(".fa-play").addEventListener("click", function () {
    var playb = document.querySelector("#playb");
    if (playb.classList.contains("fa-play")) {
        playb.classList.remove("fa-play");
        playb.classList.add("fa-stop");
        DrumMachine(beat1);
    }
    else {
        playb.classList.remove("fa-stop");
        playb.classList.add("fa-play");
        stopbeat();
    }
});
var i = 0;
var myinterval;
// tslint:disable-next-line: typedef
function stopbeat() {
    clearInterval(myinterval);
}
// tslint:disable-next-line: typedef
function DrumMachine(beat) {
    myinterval = setInterval(function () {
        var Sample = new Audio(beat[i]);
        Sample.play();
        console.log(beat[i]);
        i++;
        if (i > 2) {
            i = 0;
        }
    }, 500);
}
document.querySelector("#deleteb").addEventListener("click", function () { deletebeat(); });
function deletebeat() {
    beat1.length = 0;
    document.querySelector("#recordb").addEventListener("click", function () { recording(); });
    var isrecording = false;
    function recording() {
        isrecording = true;
    }
}
//# sourceMappingURL=script.js.map