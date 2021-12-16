let counter = 0;
let correct = document.getElementsByClassName('correct');
let score = document.getElementById('score');
let btn2 = document.getElementById('btn').addEventListener('click', function(){
    for (let a = 0; a<correct.length ; a++){
        if (correct[a].checked){
            counter++;
        }

    }
    score.innerHTML = counter + "/5";
   counter = 0;
    console.log("btn");
});

