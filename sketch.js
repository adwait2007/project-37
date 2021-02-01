var gameState=0;
var contestantCount,database,quiz,question,contestant;
var allcontestant;
var display_Answer=30;

function setup(){
   createCanvas(850,400);

  database=firebase.database();

  quiz=new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink");
  
  if(contestantCount===4){
    quiz.update(1);
  }

  if(gameState===1){
    clear();
    quiz.end();
  }

}
