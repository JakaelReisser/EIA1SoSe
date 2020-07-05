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
var close = document.getElementsByClassName("fas fa-trash-alt");
var i;
for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
                count--;
                document.getElementById("#mySpan").innerHTML = String(count);
            };
        }
    }

var Liste2 = document.querySelector(".addlist");
    drawList();

    // tslint:disable-next-line: typedef
var total = document.querySelector("#mySpan");
total.innerHTML = todoListe.length;

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

