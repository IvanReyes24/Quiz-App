
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      {text: "How to make lumpia", correct: false },
      {text: "How to make ligaw", correct: false },
      {text: "HyperText Markup Language", correct: true },
      {text: "Skibidi Toilet", correct: false }
    ]
  },
  {
    question: "What is the capital city of France?",
    answers: [
      {text: "Berlin", correct: false },
      {text: "Paris", correct: true },
      {text: "Madrid", correct: false },
      {text: "Rome", correct: false }
    ]
  }
];

let questionElement = document.querySelector("#question");
let answerButton = document.querySelector("#answer-btn");
let nextBtn = document.querySelector("#nextQuestion");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("w-full", "border-2", "rounded-md", "text-left", "px-3", "py-1", "hover:bg-slate-100");
    answerButton.appendChild(button);

    button.addEventListener("click", () => selectAnswer(answer));
  });

  nextBtn.style.display = "none";
}

function resetState(){
  nextBtn.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(answer){
  if(answer.correct){
    score++;
  }
  Array.from(answerButton.children).forEach(button => {
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  } else {
    showScore();
  }
});

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Restart";
  nextBtn.style.display = "block";
  nextBtn.addEventListener("click", startQuiz);
}

startQuiz();

