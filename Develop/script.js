// Set start
var start = document.querySelectorAll(".btn");
var Q1index=1
var prequestion=0


function startQuiz () {
    document.querySelector (".card-header").style="display:block;";
    document.querySelector (".start-header").style="display:none;";
    document.querySelector (".start-p1").style="display:none;";
    document.querySelector (".start-p2").style="display:none;";
    document.querySelector ("#start").style="display:none;";

    document.querySelector (".Q"+Q1index).style="display:block;";
if (prequestion!=0) {
    document.querySelector (".Q"+prequestion).style="display:none;";
}

// timedCount();
if (!this.classList.contains("correct")) {
    // time-=10
console.log("wrong!")
} else {
    console.log("correct!")
}


Q1index ++
prequestion ++

}

for(i=0; i<start.length; i++) {
    start[i].addEventListener ("click", startQuiz)
}
