let scores, roundScore,activePlayer,gamePlaying;


init(); //calls the function that intializes the game


document.querySelector('.btn-roll').addEventListener('click', function(){
   if(gamePlaying){

   //1.random number
   let dice = Math.floor(Math.random() * 6) + 1; //adding a one will make this from 1-6 instead of 0-5


//2.display result
let diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block'; 
diceDOM.src = 'dice-' + dice + '.png';

//3.update the round score IF the rolled number is NOT 1
if(dice !== 1){
//add score
roundScore += dice;
//setter because we set a value
document.querySelector('#current-' + activePlayer).textContent = roundScore;//query selector lets us select stuff exactly how we do in css 
}
else {
 //next player
nextPlayer();
}


}});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){

    // add current score to the global score
    scores[activePlayer] += roundScore;
    
    //update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if the player won the game
   if (scores[activePlayer] >= 100) {
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
       document.querySelector('.dice').style.display = 'none';
       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
       gamePlaying = false;
       
    }
    else{
        //next player
    nextPlayer();   
    }
    
    }

});



function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // this is saying that if active player is already = to 0 then active player should change to 1, else active player should be 0 
 roundScore = 0; //set score back to 0

 document.getElementById('current-0').textContent = '0'; //shows 0 in the user interface
 document.getElementById('current-1').textContent = '0';

 document.querySelector('.player-0-panel').classList.toggle('active'); //shows whose turn it is 
 document.querySelector('.player-1-panel').classList.toggle('active');

 document.querySelector('.dice').style.display='none'; //hides the dice again once the player gets a 1 

}

//when new game is clicked
document.querySelector('.btn-new').addEventListener('click', init);

//initializes game
function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;


document.querySelector('.dice').style.display = 'none'; //hides the dice image once the player enters the game


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}

/*So what that init function does is when the page loads
 up it makes sure that none of the players 
 have any classes so thats why we remove winner and
  active and the last line just adds the active class 
  to player 1 because player 1 always starts. */