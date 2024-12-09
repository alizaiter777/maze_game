
let score=0;
let is_game_running=false;

let x;
let end;
let start;
let boundaries;
let status_display; 

document.addEventListener("DOMContentLoaded", loadPage);




function displayScore(message){
    if(message != "")
        status_display.innerHTML = message + "<br/>" + "Your Score is: " + score;
}


function endGame(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(113 225 141)"; 
        score = score + 5;
        displayScore("You Won!");
        start.style.display="none";
        s_box.style.display="block";
        reset.style.display="block";
        is_game_running=false;
    }
    
}


function gameOver(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(243, 159, 159)"; 
        if(score > 0)
        score = score - 1;
        displayScore("You Lose :("); 
        reset.style.display="none";
        is_game_running=false;
    }
}


function startGame(){
    displayScore("")
    is_game_running=true;
    reset.style.display="none";
    for(let i = 0; i < boundaries.length; i++)
        boundaries[i].style.backgroundColor = "#eeeeee"; 
}

function resetGame(){
    if(x==1){
        start.style.display="block";
        s_box.style.display="none";
        startGame()
        is_game_running = false;
    }
}

function loadPage(){
    end = document.getElementById("end");
    start = document.getElementById("start");
    s_box = document.getElementById("s_box");
    reset = document.getElementById("reset");
    boundaries = document.getElementsByClassName("boundary");
    status_display =  document.getElementById("status");
    
    start.addEventListener("click", startGame);
    end.addEventListener("mouseover", endGame);
    s_box.addEventListener("mouseover",endGame);
    reset.addEventListener("click",resetGame);
    for(let i = 0; i < boundaries.length; i++){
        boundaries[i].addEventListener("mouseover", gameOver);
    }
    
}