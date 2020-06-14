"use strict";
//ich habe den lösungsweg teilweise von markus am praktikumstag, emre hat mir noch erklärt, wie die zuweisung genau funktioniert//
var sounds = [];
sounds.push(new Audio("A.mp3"));
sounds.push(new Audio("C.mp3"));
sounds.push(new Audio("F.mp3"));
sounds.push(new Audio("G.mp3"));
sounds.push(new Audio("hihat.mp3"));
sounds.push(new Audio("kick.mp3"));
sounds.push(new Audio("laugh-1.mp3"));
sounds.push(new Audio("laugh-2.mp3"));
sounds.push(new Audio("snare.mp3"));
function playSample(x) {
    sounds[x].play();
}
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
function drummachine() {
    // tslint:disable-next-line: typedef
    setInterval(function () {
        playSample(5);
        playSample(8);
        playSample(5);
        playSample(8);
        playSample(5);
        playSample(4);
        playSample(8);
        playSample(5);
        playSample(8);
        playSample(4);
        playSample(8);
        playSample(5);
        playSample(8);
        playSample(4);
        playSample(8);
        playSample(5);
        playSample(8);
        playSample(4);
        playSample(8);
        playSample(5);
        playSample(8);
        playSample(4);
        playSample(8);
        playSample(5);
        playSample(8);
    }, 500);
}
window.addEventListener("load", function () {
    document.querySelector("#beat").addEventListener("click", drummachine);
});
//# sourceMappingURL=script.js.map