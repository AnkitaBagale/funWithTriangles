
var formSelectFormula = document.forms[0];
var areaCalBlock = document.querySelectorAll(".areaCalBlock");
var areaShowHere = document.querySelectorAll(".areaShowHere");

var inputInOption1 = document.querySelectorAll(".inputInOption1");
var inputInOption2 = document.querySelectorAll(".inputInOption2");
var inputInOption3 = document.querySelectorAll(".inputInOption3");

formSelectFormula.addEventListener('submit', (e)=>{
    e.preventDefault();
    var data = new FormData(formSelectFormula);
    for(let entry of data){
        if(entry[1] == "areaCalOption1"){
            areaCalBlock[0].style.display = "block";
            areaCalBlock[1].style.display = "none";
            areaCalBlock[2].style.display = "none";
        }
        if(entry[1] == "areaCalOption2"){
            areaCalBlock[1].style.display = "block";
            areaCalBlock[0].style.display = "none";
            areaCalBlock[2].style.display = "none";
        }
        if(entry[1] == "areaCalOption3"){
            areaCalBlock[2].style.display = "block";
            areaCalBlock[1].style.display = "none";
            areaCalBlock[0].style.display = "none";
        }

    }
    
}, false);


document.forms[1].addEventListener('submit', (e)=>{
    e.preventDefault();
    var b= Number(inputInOption1[0].value)
    var h= Number(inputInOption1[1].value)
    areaShowHere[0].innerText = (b*h)/2

}, false)

document.forms[2].addEventListener('submit',(e)=>{
    e.preventDefault();
    var a= Number(inputInOption2[0].value)
    var b= Number(inputInOption2[1].value)
    var c= Number(inputInOption2[2].value)
    var s=a+b+c;
    areaShowHere[1].innerText= Math.sqrt(s*(s-a)*(s-b)*(s-c));  
}, false )

document.forms[3].addEventListener('submit',(e)=>{
    e.preventDefault();
    var b = Number(inputInOption3[0].value)
    var c = Number(inputInOption3[1].value)
    var A = Number(inputInOption3[2].value)
    areaShowHere[2].innerText= (b*c*Math.sin(A*Math.PI/180))/2;  
}, false )

        