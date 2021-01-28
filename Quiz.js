class Quiz{
    constructor(){

    }
    
    getState(){
     var gameStateRef  = database.ref('gameState');
     gameStateRef.on("value",function(data){
     gameState = data.val();
    })

    }
    
    update(state){
        database.ref('/').update({
        gameState: state
        });
      }

  async start(){
      if(gameState===0){
          contestant=new Contestant();
          var contestantCountRef=await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
              contestantCount=contestantCountRef.val();
              contestant.getCount();
          }
          question=new Question();
          question.display();
      }
  }
  
  play(){
      background("yellow");

      textSize(30);
      text("Result of Quiz ",350,0);

      getContestantInfo();

      if(allcontestant !== undefined){
          textSize(20);
          text("Note:Contestant who have answer correct are in green color.",150,230);

          for(var plr in allcontestant){
              var correctAns="2";
          if(correctAns===allcontestant[plr].answer){
              fill("green");
           }
           else{
               fill("red");
           }
          }
      }
      
  }

}