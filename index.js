let cscore = 0;
let pscore = 0;

function reset() {
    pscore = 0;
    cscore = 0;
    updateScores();
}

//for the scores to update
function updateScores() {
    const urScore = document.getElementById('yourscore');
    const pcScore = document.getElementById('comscore');
    
    urScore.innerHTML = pscore;
    pcScore.innerHTML = cscore;

    if (cscore == 5){
        alert('Computer Wins!');;
    } else if (pscore == 5){
        alert ('You Win!');
    }
}

function rock(){

    //declaring the cariable we will be using
    let guest = document.getElementById('rck').innerText;
    //we add .innerText at the end to make sure that the result will be displayed
    console.log(guest);
    let computer = Math.ceil(Math.random() * 3);
    console.log(computer);
    let comscore = document.getElementById("comscore");
    let yourscore = document.getElementById("yourscore");

    //conditions for the rock
    //1 = rock
    //2 = paper
    //3 = scissors
    if ((guest == "Rock") && (computer == 1)){
        let result = document.getElementById('result');
        result.innerText = ("Draw");

    }else if ((guest == "Rock") && (computer == 2)){
        let result = document.getElementById('result');
        result.innerText = ("You Lose");

        cscore = cscore +1;
        comscore.value = cscore;
        
    }else if ((guest == "Rock") && (computer ==3)){
        let result = document.getElementById('result');
        result.innerText = ("You Win");

        pscore = pscore +1;
        yourscore.value = pscore;

    }

    updateScores();

    if (cscore == 5){
        alert('Computer Wins!');;
    } else if (pscore == 5){
        alert ('You Win!');
    }
}

function paper(){

    let guest = document.getElementById('ppr').innerText;
    console.log(guest);
    let computer = Math.ceil(Math.random() * 3);
    console.log(computer);
    let comscore = document.getElementById("comscore");
    let yourscore = document.getElementById("yourscore");

    if ((guest == "Paper") && (computer == 1)){
        let result = document.getElementById('result');
        result.innerText = ("You Win");

        pscore = pscore +1;
        yourscore.value = pscore;

    }else if ((guest == "Paper") && (computer == 2)){
        let result = document.getElementById('result');
        result.innerText = ("Draw");

    }else if ((guest == "Paper") && (computer ==3)){
        let result = document.getElementById('result');
        result.innerText = ("You Lose");

        cscore = cscore +1;
        comscore.value = cscore;
    }

    updateScores();

    if (cscore == 5){
        alert('Computer Wins!');;
    } else if (pscore == 5){
        alert ('You Win!');
    }
}

function scissors(){
    let guest = document.getElementById('scssrs').innerText;
    console.log(guest);
    let computer = Math.ceil(Math.random() * 3);
    console.log(computer);
    let comscore = document.getElementById("comscore");
    let yourscore = document.getElementById("yourscore");

    if ((guest == "Scissors") && (computer == 1)){
        let result = document.getElementById('result');
        result.innerText = ("You Lose");

        cscore = cscore +1;
        comscore.value = cscore;

    }else if ((guest == "Scissors") && (computer == 2)){
        let result = document.getElementById('result');
        result.innerText = ("You Win");

        pscore = pscore +1;
        yourscore.value = pscore;

    }else if ((guest == "Scissors") && (computer ==3)){
        let result = document.getElementById('result');
        result.innerText = ("Draw");
    }

    updateScores();

    if (cscore == 5){
        alert('Computer Wins!');;
    } else if (pscore == 5){
        alert ('You Win!');
    }
}

