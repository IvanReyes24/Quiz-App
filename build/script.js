
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
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      {text: "O2", correct: false },
      {text: "H2O", correct: true },
      {text: "CO2", correct: false },
      {text: "H2", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      {text: "Earth", correct: false },
      {text: "Mars", correct: true },
      {text: "Jupiter", correct: false },
      {text: "Saturn", correct: false }
    ]
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      {text: "Harper Lee", correct: true },
      {text: "J.K. Rowling", correct: false },
      {text: "Mark Twain", correct: false },
      {text: "Ernest Hemingway", correct: false }
    ]
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      {text: "Atlantic Ocean", correct: false },
      {text: "Indian Ocean", correct: false },
      {text: "Arctic Ocean", correct: false },
      {text: "Pacific Ocean", correct: true }
    ]
  },
  {
    question: "In which year did the Titanic sink?",
    answers: [
      {text: "1905", correct: false },
      {text: "1912", correct: true },
      {text: "1923", correct: false },
      {text: "1898", correct: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      {text: "Vincent van Gogh", correct: false },
      {text: "Pablo Picasso", correct: false },
      {text: "Leonardo da Vinci", correct: true },
      {text: "Claude Monet", correct: false }
    ]
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      {text: "Gold", correct: false },
      {text: "Iron", correct: false },
      {text: "Diamond", correct: true },
      {text: "Platinum", correct: false }
    ]
  },
  {
    question: "Which organ is responsible for pumping blood throughout the human body?",
    answers: [
      {text: "Lungs", correct: false },
      {text: "Liver", correct: false },
      {text: "Heart", correct: true },
      {text: "Kidney", correct: false }
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
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer);
  });

  nextBtn.style.display = "none";
}

function resetState(){
  nextBtn.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
const selectBtn = e.target
const isCorrect = selectBtn.dataset.correct === "true"

if(isCorrect){
  selectBtn.classList.add("correct")
  score++;
}else{
  selectBtn.classList.add("incorrect")
}
Array.from(answerButton.children).forEach(button =>{
  if(button.dataset.correct === 'true'){
    button.classList.add("correct")
  }
  button.disabled = true;
})
nextBtn.style.display = "block";
}

function handleButton(){
  currentQuestionIndex++
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again"
  nextBtn.style.display = "block"
}

nextBtn.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleButton();
  }else{
    startQuiz(); 
  }
})




startQuiz();

