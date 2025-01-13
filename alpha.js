function play() {
   const home = 'homesection';
   const play = 'playsection';

   hideEliment(home);
   showEliment(play)
   continueGame();

}

// main funtion
function continueGame() {
   const alfabate = genaretAranmodAlfabate();
   const display = document.getElementById('display');
   display.innerText = alfabate;
   addbgcolorByid(alfabate);

   return alfabate;


}

function keyupfunction(event) {
   const keypress = event.key;
   const getkey = document.getElementById('display');
   const expectedkey = getkey.innerText;

   const expectedkeyfinal = expectedkey.toLowerCase();
   const eliment = document.getElementById(expectedkeyfinal);


   if (keypress == expectedkeyfinal) {

      const scoreFild = document.getElementById('score');
      const scoreText = scoreFild.innerText;
      const scorenumber = parseInt(scoreText);
      const newScore = scorenumber + 1;
      scoreFild.innerText = newScore;
      eliment.style.backgroundColor = 'white';
      continueGame();

   }
   else {
      const lifeFild = document.getElementById('life');
      const lifeText = lifeFild.innerText;
      const lifenumber = parseInt(lifeText);

      const newlife = lifenumber - 1;
      lifeFild.innerText = newlife;

      if (newlife == 0) {
         hideEliment('playsection');
         showEliment('scoresection');

         const finalscorefild = document.getElementById('mainscore');
         const scoreFild = document.getElementById('score');
         const scoreText = scoreFild.innerText;
         finalscorefild.innerText = scoreText;




      }


   }



}

document.addEventListener('keyup', keyupfunction);

document.getElementById('btnagain').addEventListener('click', function () {

   hideEliment('scoresection');
   showEliment('playsection');

   const scoreFild = document.getElementById('score');
   scoreFild.innerText ='0';
   const lifeFild = document.getElementById('life');
   lifeFild.innerText = '5';





})
