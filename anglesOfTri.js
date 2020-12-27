
var formTriangle = document.querySelector('#formTriangle');
var inputAngles = document.querySelectorAll('.inputAngle');
var outputDiv= document.querySelector('#isTriangle');

var anglesJS=[];


document.addEventListener('submit',formTriangleHandler);

function formTriangleHandler(e){
    e.preventDefault();

    for(i=0; i<inputAngles.length; i++){
        anglesJS[i] = Number(inputAngles[i].value);
    }
    
    var sum=0;
    anglesJS.map((angle)=>{
        sum=sum+angle;
    })

    if(sum ===180){
        outputDiv.innerText = "Yuhu! these angles can make a triangle";
    }
    else{
        outputDiv.innerText = "Oops! these angles cannot make a triangle";
    }
}