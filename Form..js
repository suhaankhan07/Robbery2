class Form {
    constructor() {
     this.input = createInput("Name");
     this.button = createButton('Play');
     this.greeting = createElement('h3');
     this.title = createElement('h1');
     this.reset = createButton('RESTART');
     this.dice = createButton("CLICK ME TO ROLL DICE")
     this.specialDice = createButton("CLICK ME TO ROLL SPECIAl DICE")
     this.diceInput= createElement('h4');
     this.specialDiceInput = createElement('h4');
     this.resetInput = createElement('h3');
    }
    hide() {
      this.greeting.hide();
      this.input.hide();
      this.button.hide();  
      this.title.hide();
    }

    display() {
      this.title.html("Robbery");
      //image(RobberyImg, 200,100);  
      this.title.position(displayWidth/2-50,0);

      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      //this.button.addImage("playButton",PlayImg);

      this.dice.position(200,20);

      this.specialDice.position(400,20);

      this.reset.position(displayWidth-400,20);
      image(RestartImg,displayWidth-400,20);

      // this.button.("red");
      this.button.mousePressed(()=>{
       this.input.hide();
       this.button.hide();
       player.name = this.input.value();
       playerCount+=1;
       player.index = playerCount;
       player.update();
       player.updateCount(playerCount);
       this.greeting.html("Hello " + player.name)
       this.greeting.position(displayWidth/2 - 70, displayHeight/5);
      });

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        this.resetInput.html("Refresh to play again. Come on, what are you waiting for?");
        this.resetInput.position(displayWidth/2-200,displayHeight/2 -300);
      });

      this.dice.mousePressed(()=>{
       dice = Math.round(random(1,4));
       textSize(20);
       fill("black");
       this.diceInput.html("Dice : "+ dice);
       this.diceInput.position(240,20);
       console.log(dice);
      })
 
      this.specialDice.mousePressed(()=>{
        specialDice = Math.round(random(4,10));
        textSize(20);
        fill("red");
        this.specialDiceInput.html("Dice : "+ specialDice);
        this.specialDiceInput.position(480,20);
        console.log(specialDice);
      })

    }
}
