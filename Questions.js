class Question{
    constructor(){
        this.input1=createInput("Your Name");
        this.input2=createInput("Your Answer");
        this.title=createElement('h2');
        this.question=createElement('h3');
        this.option1=createElement('h3');
        this.option2=createElement('h3');
        this.option3=createElement('h3');
        this.option4=createElement('h3');
        this.button=createButton("Submit");
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:-What start and ends with letter 'E' but which has letter 'L' in between those 2 'E'? ")
        this.question.position(60,80);

        this.option1.html("1.Everyone");
        this.option1.position(150,100);

        this.option2.html("2.Envelope");
        this.option2.position(150,120);

        this.option3.html("3.Estimate");
        this.option3.position(150,140);

        this.option4.html("4.Everything");
        this.option4.position(150,160);

        this.input1.position(150,230);

        this.input2.position(350,230);

        this.button.position(300,300);

        this.button.mousePressed(()=>{
            this.button.hide();
            contestant.name=this.input1.value();
            contestant.answer=this.input2.value();
            contestantCount+=1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
}