"use strict";

const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", result: false },
      { text: "Blue Whale", result: true },
      { text: "Dog", result: false },
      { text: "Giraffe", result: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", result: true },
      { text: "Bhutan", result: false },
      { text: "Nepal", result: false },
      { text: "Sri Lanka", result: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari Desert", result: false },
      { text: "Gobi Desert", result: true },
      { text: "Sahara Desert", result: true },
      { text: "Antarctic Desert", result: false },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Australia", result: true },
      { text: "Asia", result: false },
      { text: "Arctic", result: false },
      { text: "Africa", result: false },
    ],
  },
  {
    question: "Which is the largest river in the world?",
    answers: [
      { text: "Amazon", result: false },
      { text: "Ganga", result: true },
      { text: "Nile", result: false },
      { text: "Yangtze", result: false },
    ],
  },
];
// console.log(questions[3].answer[0].result);

const quesNumber = document.querySelector(".question-number");
const quesText = document.querySelector(".question-text");
const ansBtn = document.querySelector(".answer");
const nextBtn = document.querySelector(".btn-next");
const option = document.querySelector(".btn");

let currentQuesIndex = 0;
let score = 0;

function startQuiz(question) {
  currentQuesIndex = 0;
  score = 0;
  displayQuestion();
}
// nextBtn.addEventListener("click", () => {
//   console.log();
//   classList.add(".hidden");
// });

// const nextBtnHide = function () {
//   nextBtn.addEventListener("click", () => {});
// };

// const nextBtnShow = function () {
//   // console.log();
// };
// let count = 0;

function displayQuestion() {
  let currentQuestion = questions[currentQuesIndex].question;
  let questionNo = `${currentQuesIndex + 1}.`;
  quesNumber.textContent = questionNo;
  quesText.textContent = currentQuestion;

  // currentQuestion.answers.forEach((answer) => {
  //   const button = document.createElement("button");
  //   button.innerHTML = answer.text;
  //   btn.classList.add("btn");
  //   answerButton.appendChild(button);
  // });
  currentQuestion.answers.forEach((answer) => {
    console.log();
  });
}
startQuiz();
