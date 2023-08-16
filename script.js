let score = 0;
let timer = 60;
let hitRun = 0;


function makeBubble(){
    let contain = '';
    for(let i=0;i<126;i++){
        let num = Math.floor(Math.random()*10);
        contain += `<div class="box">${num}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = contain;
}


function timerInterval(){
    let setTimer = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timeInterval").innerHTML = timer;
        }
        else{
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over!</h1>`;

            clearInterval(setTimer);
        }
    },1000);
}


function increseScore(){
    score = score + 10;
    document.querySelector("#score").innerHTML = score;
}

function generateHit(){
    hitRun = Math.floor(Math.random()*10);
    document.querySelector("#randomHit").innerHTML = hitRun;
}

generateHit();
timerInterval();
makeBubble();

document.querySelector(".pbtm").addEventListener('click', function(event){
    if(Number(event.target.textContent) === hitRun){
        generateHit();
        makeBubble();
        increseScore();
    }
})