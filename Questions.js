class Question{
    constructor(){
        this.input1=null;
        this.input2=null;
        this.title=null;
        this.question=null;
        this.option1=null;
        this.option2=null;
        this.option3=null;
        this.option4=null;
    }
    diplay(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:-What start and ends with letter 'E' but which has letter 'L' in between those 2 'E'? ")
        this.question.position(150,80);

        this.option1.html("1.Everyone");
        this.option1.position(150,100);

        this.option2.html("2.Envelope");
        this.option2.position(150,120);

        this.option3.html("3.Estimate");
        this.option3.position(150,140);

        this.option4.html("4.Everything");
        this.option4.position(150,160);

        this.input1=createInput("Write Your Name Here");
        this.input1.position(150,230);

        this.input2=createInput("Write Your Answer ");
        this.input2.position(250,230);
    }
}