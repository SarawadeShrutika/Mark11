const quizform=document.querySelector('.quiz-form');
const result_btn=document.querySelector('#submit-answer-btn');
const outputE1=document.querySelector('#output');

const correctAnswers = ["90", "right angled", "one right angle", " Equilateral Triangle","85"];

function calculateScore(){
  let score =0;
  let index =0;

  const formResults = new FormData(quizform);

  for(let value of formResults.values()){
    if(value === correctAnswers[index])
    {
      score = score+1;
    }
    index = index + 1;
  }
     alert("Your score is " + score); 
   
}

result_btn.addEventListener('click', calculateScore);
