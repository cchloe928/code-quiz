const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const pStart = document.querySelector('.p-start')
const submitButton = document.querySelector('#submit-btn')
const finish = document.querySelector('.finish')
var time = 60
const timerEL = document.querySelector('.time')

let shuffledQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  pStart.classList.add('hide')

var timer = setInterval(() => {
  time -- 
  timerEL.textContent=time
}, 1000);

  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }else {
      time-=10
    }

    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {

    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    // submitButton.innerText = 'Submit'
    submitButton.classList.remove('hide')
    answerButtonsElement.classList.add('hide')
    finish.classList.remove('hide')
    questionElement.classList.add('hide')
  }
}

function submitscore() {
  let initial = document.querySelector('#initials').value
  let score = time
  localStorage.setItem(initial,score)
}

submitButton.addEventListener('click', submitscore)


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: "What is HTML stands for?",
        answers: [
            {text: "Hypertext Markup Language", correct: true },
            {text: "Cascading Style Sheets", correct: false },
            {text: "Algorithm", correct: false },
            {text: "jQuery", correct: false }
    ]
  },
  {
    question: "What is CSS stands for?",
    answers: [
        {text: "Hypertext Markup Language", correct: false },
        {text: "Cascading Style Sheets", correct: true },
        {text: "Algorithm", correct: false },
        {text: "jQuery", correct: false }
    ]
  },
  {
    question: "The condition in an if / else statement is enclosed with _____.",
    answers: [
        {text: "Quotes", corect: false },
        {text: "Curly Brackets", correct: false },
        {text: "Parenthesis", correct: true },
        {text: "Square Backets", correct: false }
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
        {text: "Numbers and Strings", correct: false },
        {text: "Other Arrays", correct: false },
        {text: "Booleans", correct: false },
        {text: "All of the above", correct: true }
    ]
  }
]