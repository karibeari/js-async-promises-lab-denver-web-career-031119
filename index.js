const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let questionDiv = document.querySelector('.question-container')

function appendQuestion (question) {
  questionDiv.innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){resolve(question)}, time)
  })
}

function removeQuestion (){
  questionDiv.innerHTML = '';
}

function askQuestionThenRemoveQuestion (time) {
  return askQuestionThen(time)
    .then(removeQuestion)
}

function trueAndFalseButtons () {
  return document.querySelectorAll(".green, .red")
}

function toggleTrueAndFalseButtons () {
  trueAndFalseButtons().forEach(function(button) {
      button.classList.toggle('hide')
  })
}

function displayQuestionOnClick () {
  let askAway = document.querySelector('a')
  return askAway.addEventListener('click', appendQuestion)
}
