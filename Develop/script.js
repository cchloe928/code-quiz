// Set start
var start = document.querySelectorAll(".btn");
var Q1index=0
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
}}


var qHeader = document.getElementById("qHeader")
var qcontainer = document.getElementById("question-Container")

function createQuestion () {
    var Arr = Questions[Q1index].a
    var question = Questions [Q1index].q
    qHeader.textContent = question
    console.log (question)


for(var i = 0; i <Arr.length; i ++){
        var button = document.createElement("button")
        console.log(Arr[i])
        button.textContent = Arr[i].text
        qcontainer.appendChild(button)
    }



const Questions = [{
    id: 0,
    q: "What is HTML stands for?",
    a: [{ text: "Hypertext Markup Language", isCorrect: false },
        { text: "Cascading Style Sheets", isCorrect: true },
        { text: "Algorithm", isCorrect: false }, 
        { text: "jQuery", isCorrect: false }
        ]
},
{
    id: 1,
    q: "What is CSS stands for?",
    a: [{ text: "Hypertext Markup Language", isCorrect: false },
        { text: "Cascading Style Sheets", isCorrect: true },
        { text: "Algorithm", isCorrect: false },
        { text: "jQuery", isCorrect: false }
        ]
},
{
    id: 2,
    q: "The condition in an if / else statement is enclosed with _____.",
    a: [{ text: "quotes", isCorrect: false   },
        { text: "curly_brackets", isCorrect: false },
        { text: "parenthesis", isCorrect: true },
        { text: "Square Brackets", isCorrect: false }
        ]        
},
{
    id: 3,
    q: "Arrays in JavaScript can be used to store _____.",
    a: [{ text: "numbers_and_strings", isCorrect: false },
        { text: "other_Arrays", isCorrect: false },
        { text: "booleans", isCorrect: false },
        { text: "all_of_the_above", isCorrect: true }
        ]

}],


// timedCount();
    document.getElementById ("timer").style="display:block;"
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



function countdownFunction () {
    // deduct time so that the clock is counting down in the browser
    time--;
    iTimeShow.textContent = time;
  
    // create a conditional to see if the user has run out of time
    if (time <= 0) {
      thisIsWhereYourQuizEndingFunctionWouldBeCalled();
    }
     }
