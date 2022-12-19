const startButton = document.getElementById ("start-btn")
const nextButton = document.getElementById ("next-btn")
const questionContainerElement = document.getElementById ("question-container")
const questionContainerElement= document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")


let shuffledQuestions, currentQuestionIndex
startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    restState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionContainerElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement ("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


function selectAnswer() {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
 })
 if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
 }


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove ("wrong")
}


const question = [
    {
        question: "What is HTML stands for?",
        answers: [
            {text: "Hypertext Markup Language", corect: true },
            {text: "Cascading Style Sheets", corect: false },
            {text: "Algorithm", corect: false },
            {text: "jQuery", corect: false },
        ]
    },
{
    question: "What is CSS stands for?",
    answers: [
        {text: "Hypertext Markup Language", corect: false },
        {text: "Cascading Style Sheets", corect: true },
        {text: "Algorithm", corect: false },
        {text: "jQuery", corect: false },
    ]
},
{
    question: "The condition in an if / else statement is enclosed with _____.",
    answers: [
        {text: "Quotes", corect: false },
        {text: "Curly Brackets", corect: false },
        {text: "Parenthesis", corect: true },
        {text: "Square Backets", corect: false },
    ]
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
        {text: "Numbers and Strings", corect: false },
        {text: "Other Arrays", corect: false },
        {text: "Booleans", corect: false },
        {text: "All of the above", corect: true },
    ]
}
]