

var areaCalBlock = document.querySelectorAll(".areaCalBlock");
var areaShowHere = document.querySelectorAll(".areaShowHere");

var inputInOption1 = document.querySelectorAll(".inputInOption1");
var inputInOption2 = document.querySelectorAll(".inputInOption2");
var inputInOption3 = document.querySelectorAll(".inputInOption3");

var radios = document.forms[0].elements;
console.log(radios);

radios[0].addEventListener('change', ()=>{
    showOrHideBlock(areaCalBlock, 0, 1, 2);
})
radios[1].addEventListener('change', ()=>{
    showOrHideBlock(areaCalBlock, 1, 0, 2);
})
radios[2].addEventListener('change', ()=>{
    showOrHideBlock(areaCalBlock, 2, 1, 0);
})

function showOrHideBlock(blockDivs, showDivIndex, hideDivIndex1, hideDivIndex2){
    blockDivs[showDivIndex].style.display = "block";
    blockDivs[hideDivIndex1].style.display = "none";
    blockDivs[hideDivIndex2].style.display = "none";
}


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

        