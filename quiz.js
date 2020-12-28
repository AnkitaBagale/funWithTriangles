var quizForm = document.forms[0];
var queDivs = document.querySelectorAll(".ow");
var scoreDiv = document.querySelector(".scoreHere");
var submitQuiz = document.querySelector("#submitQuiz");

var correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];
var score= 0;

quizForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    var data = new FormData(quizForm);
    var index=0;
    for(let entry of data){
       if(entry[1] == correctAns[index]){
        queDivs[index].style.backgroundColor = "lightgreen";
        score++;
       }
       else{
        queDivs[index].style.backgroundColor = "pink";
       }
        index++;
    }
    scoreDiv.innerText = score;
    submitQuiz.style.display= "none";
});