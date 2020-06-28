"use strict";
// Naomi hat mir geholfen. uff³
let todoListe = ["Medienanalyse Präsentation ", "EIA Hausaufgaben ", "Medienpsychologie ", "Medientechnik Präsentation"];
window.addEventListener("load", function () {
    function drawList() {
        Liste2.innerHTML = "";
        for (var index = 0; index < todoListe.length; index++) {
            Liste2.innerHTML += "<div>" + "<input type='checkbox'>" + todoListe[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
        }
        var total = document.querySelector("#mySpan");
        total.innerHTML = todoListe.length;
    }
    var Liste2 = document.querySelector(".addlist");
    drawList();
    var input = document.querySelector("#newAdd");
    console.log(input);
    var addNewElement = document.querySelector("#button1");
    addNewElement.addEventListener("click", function () {
        todoListe.push(input.value);
        drawList();
        input.value = "";
        console.log(todoListe);
    });
});
//# sourceMappingURL=script.js.map