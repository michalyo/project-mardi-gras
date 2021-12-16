const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');


for(let r = 0; r < question.length; r++){
    question[r].addEventListener('click' , ()=>{
       answer[r].classList.toggle("openText")
    });
}

