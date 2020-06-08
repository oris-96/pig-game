/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScores,currentPlayer;
//hold the scores
scores = [0,0];

//hold the score for each round
roundScores = 0;

//current player

currentPlayer = 0;

//start game

var playGame = true;

startGame();

document.querySelector('.btn-roll').addEventListener('click',function(){

    if (playGame){
         //dice
    var dice = Math.floor(Math.random()*6)+1;

    // the dice displays the current randomised dice value 
    document.querySelector('.dice').src='dice-'+ dice +'.png';

    if (dice >1){
         //update the round scores to the current score
         roundScores += roundScores + dice;
         document.querySelector('#current-'+ currentPlayer).textContent = roundScores;
         document.querySelector('.dice').style.display= 'block';
    }else{

        //next player turn
       nextPlayer();

    }
    }
});



document.querySelector('.btn-hold').addEventListener('click',function(){
   
   if (playGame){
    scores[currentPlayer] += roundScores;
   
    if(scores[currentPlayer]>=100){
         //update the globalscore with the current score

        document.querySelector('#score-' + currentPlayer).textContent= scores[currentPlayer];
        document.querySelector('#name-' + currentPlayer).textContent='winner';
        document.querySelector('.player-'+ currentPlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ currentPlayer +'-panel').classList.remove('active');
        playGame = false;
    }else{
        
        document.querySelector('#score-' + currentPlayer).textContent= scores[currentPlayer];
        nextPlayer();
    }
   }
  
      
});


function nextPlayer(){
    //next player turn
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    roundScores = 0;

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display= 'none';

}
      

document.querySelector('.btn-new').addEventListener('click',startGame);


function startGame(){
    scores= [0,0];
    currentPlayer = 0;
    roundScores = 0;
    playGame = true;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('.dice').style.display= 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

}