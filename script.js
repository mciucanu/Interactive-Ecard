/* ---------------------- PAGES 1 AND 2 ---------------------- */

document.getElementById("next").addEventListener("click", function (){
    console.log("next");
    document.getElementById("ground").style.left = "-1366px";
    document.getElementById("mountains").style.left = "-1366px";
    document.getElementById("sun").style.left = "370px";
    document.getElementById("cactus1").style.left = "-1276px";
    document.getElementById("skeleton1").style.left = "-966px";
    document.getElementById("skeleton2").style.left = "-646px";
    document.getElementById("tumbleweed").style.right = "1516px";
    document.getElementById("cactus2").style.left = "90px";
    document.getElementById("skeleton3").style.left = "370px";
    document.getElementById("house").style.right = "0px";
});

document.getElementById("prev").addEventListener("click", function (){
    document.getElementById("ground").style.left = "0px";
    document.getElementById("mountains").style.left = "0px";
    document.getElementById("sun").style.left = "690px";
    document.getElementById("cactus1").style.left = "90px";
    document.getElementById("skeleton1").style.left = "400px";
    document.getElementById("skeleton2").style.left = "720px";
    document.getElementById("tumbleweed").style.right = "150px";
    document.getElementById("cactus2").style.left = "1456px";
    document.getElementById("skeleton3").style.left = "1736px";
    document.getElementById("house").style.right = "-1366px";
});

document.getElementById("cactus1").addEventListener("click", function (){
    document.getElementById("fact1").style.display = "block";
});

document.getElementById("fact1").addEventListener("click", function (){
    document.getElementById("fact1").style.display = "none";
});

document.getElementById("skeleton1").addEventListener("click", function (){
    document.getElementById("fact2").style.display = "block";
});

document.getElementById("fact2").addEventListener("click", function (){
    document.getElementById("fact2").style.display = "none";
});

document.getElementById("skeleton2").addEventListener("click", function (){
    document.getElementById("fact3").style.display = "block";
});
    
document.getElementById("fact3").addEventListener("click", function (){
    document.getElementById("fact3").style.display = "none";
});

document.getElementById("tumbleweed").addEventListener("click", function (){
    document.getElementById("fact4").style.display = "block";
});
    
document.getElementById("fact4").addEventListener("click", function (){
    document.getElementById("fact4").style.display = "none";
});

document.getElementById("cactus2").addEventListener("click", function (){
    document.getElementById("fact5").style.display = "block";
});
    
document.getElementById("fact5").addEventListener("click", function (){
    document.getElementById("fact5").style.display = "none";
});

document.getElementById("skeleton3").addEventListener("click", function (){
    console.log("skeleteon3");
    document.getElementById("fact6").style.display = "block";
});
document.getElementById("fact6").addEventListener("click", function (){
    document.getElementById("fact6").style.display = "none";
});

document.getElementById("question").addEventListener("click", function (){
    document.getElementById("instructions").style.display = "block";
});

document.getElementById("instructions").addEventListener("click", function (){
    document.getElementById("instructions").style.display = "none";
});





/* ---------------------- STORM ---------------------- */

/*var storm = document.getElementById("storm");

function makeStorm(){
    var dust = document.createElement("img");
    var mtop = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*15)+5;
    dust.src = "images/Dust.svg";
    dust.className = "dusts";
    dust.style.top = mtop+"%";
    dust.style.width = mdim+"px";
    dust.style.height = mdim+"px";
    
    storm.appendChild(dust);
    
    if(mdim > 15){
        dust.style.transition = "top 8s";
        dust.style.opacity = "0.7";
    } else if(mdim > 10){
            dust.style.transition = "top 10s";
            dust.style.opacity = "0.5";
        } else if(mdim > 5){
                dust.style.transition = "top 12s";
                dust.style.opacity = "0.3";
            }
    
    setTimeout(function(){
        dust.style.left = "150%";
        setTimeout(function(){
            storm.removeChild(dust);
        }, 10000);
    }, 100);
}

function make10Storm(){
    makeStorm();
    makeStorm();
    makeStorm();
    makeStorm();
    makeStorm();
    makeStorm();
    makeStorm();
    makeStorm();
    makeStorm();
    makeStorm();
}

var storm2 = null;

document.getElementById("wrapper2").addEventListener("mouseenter", function(){
    storm2 = setInterval(make10Storm, 100);
});*/












