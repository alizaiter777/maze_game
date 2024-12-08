
let end;
let start;
let boundaries;


function startGame(){
    for(let i = 0; i < boundaries.length; i++)
        boundaries[i].style.backgroundColor = "#eeeeee"; 
}

function loadPage(){
    end = document.getElementById("end");
    start = document.getElementById("start");
    boundaries = document.getElementsByClassName("boundary");
    
    

    
}