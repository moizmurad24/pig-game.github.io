'use strict';

var dice, score, roundscore, activeadmi, gameplaying;
newstart();


dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#score--' + activeadmi).textContent = dice;

document.getElementById('rollbutton').addEventListener('click', function() {
    
    if(gameplaying){
        var dicedom = document.querySelector('.dice');

    dicedom.style.display = 'block';
    var dice = Math.floor(Math.random() * 6) + 1;
    dicedom.src = 'dice-' + dice + '.png';


    if(dice !== 1){
        roundscore = roundscore + dice;
        document.querySelector('#current--' + activeadmi).textContent = roundscore;
    }
    else {
      nextplayer();

    }
    }
    
});


document.querySelector(".btn--hold").addEventListener("click", function() {
    
    if(gameplaying){
        score[activeadmi] += roundscore;
        document.querySelector("#score--" + activeadmi).textContent = score[activeadmi];
    
        if (score[activeadmi] >=100){
            document.querySelector("#name--" + activeadmi).textContent = "WINNER";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector("#active" + activeadmi).classList.add("player--winner");
            document.querySelector("#active" + activeadmi).classList.add("player--active");
            gameplaying = false;
        }
        else{
            nextplayer();
        }
    }
} );


document.querySelector('.btn--new').addEventListener("click" , function() {
newstart();


});



function nextplayer() {
    if(activeadmi === 0){
        activeadmi = 1;
    }
    else{
        activeadmi = 0;
    }
    roundscore = 0;

    document.querySelector('#current--0').textContent = "0"
    document.querySelector('#current--1').textContent = "0"
    
    const p1 = document.querySelector(".player--0");
    const p2 = document.querySelector(".player--1");

   p2.classList.toggle('player--active');
   p1.classList.toggle('player--active');

   document.querySelector('.dice').style.display = 'none';
}


function newstart() {
    score = [0,0];
    roundscore = 0;
    activeadmi = 0;
    gameplaying = true;

    document.querySelector('.dice').style.display = 'none';
   
    document.querySelector('#score--0').textContent = "0";
    document.querySelector('#score--1').textContent = "0";
    document.querySelector('#current--0').textContent = "0";
    document.querySelector('#current--1').textContent = "0";
    document.querySelector('#name--0').textContent = "Player 1";
    document.querySelector('#name--1').textContent = "Player 2";
    document.querySelector('.player--0').classList.remove("player--winner");
    document.querySelector('.player--1').classList.remove("player--winner");
    document.querySelector('.player--0').classList.remove("player--active");
    document.querySelector('.player--1').classList.remove("player--active");
    document.querySelector('.player--0').classList.add("player--active");
    
}