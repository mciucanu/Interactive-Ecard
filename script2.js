/* I tried to put this in the other script file and only make one, but for some reason my facts wouldn't open. I put console.log and the images weren't even clickable.*/

document.getElementById("maracas").addEventListener("click", function (){
    document.getElementById("fact7").style.display = "block";    
});

document.getElementById("fact7").addEventListener("click", function (){
    document.getElementById("fact7").style.display = "none";
});

document.getElementById("bread").addEventListener("click", function (){
    document.getElementById("fact8").style.display = "block";
});

document.getElementById("fact8").addEventListener("click", function (){
    document.getElementById("fact8").style.display = "none";
});

document.getElementById("skull1").addEventListener("click", function (){
    document.getElementById("fact9").style.display = "block";
});

document.getElementById("skull2").addEventListener("click", function (){
    document.getElementById("fact9").style.display = "block";
});

document.getElementById("fact9").addEventListener("click", function (){
    document.getElementById("fact9").style.display = "none";
});

document.getElementById("cross").addEventListener("click", function (){
    document.getElementById("fact10").style.display = "block";
});

document.getElementById("fact10").addEventListener("click", function (){
    document.getElementById("fact10").style.display = "none";
});