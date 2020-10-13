class Game {
  constructor() {
      
  }
  
  getState() {
    var gameStateRef = database.ref('gameState');
     gameStateRef.on("value",function(data){
     gameState = data.val();
    })
  }

  update(state) {
   database.ref('/').update({
     gameState:state
   }) 
  }

  async start() {
    if(gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      
      if(playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      } 
     form = new Form();
     form.display();
    }

   Robber1 = createSprite(100,100,20,20);
    Robber1.addImage("Robber1",Robber);
    Robber1.scale = 0.3;
    
    Robber2 = createSprite(100,100,20,20);
    Robber2.addImage("Robber2",Robber);
    Robber2.scale = 0.3;

    gun1 = createSprite(random(100,1800),random(100,800));
  gun1.addImage("gun1",Pistol);
  gun1.scale = 0.08;
  gun1.visible = false;
  gun2 = createSprite(random(100,1800),random(100,800));
  gun2.addImage("gun2",Pistol);
  gun2.scale = 0.08;
  gun2.visible = false;
  gun3 = createSprite(random(100,1800),random(100,800));
  gun3.addImage("gun3",Pistol);
  gun3.scale = 0.08;
  gun3.visible = false;
  gun4 = createSprite(random(100,1800),random(100,800));
  gun4.addImage("gun4",Pistol);
  gun4.scale = 0.08;
  gun4.visible = false;

  treasureBox1 = createSprite(random(100,1800),random(100,800));
  treasureBox1.addImage("treasureBox1",treasureBox);
  treasureBox1.scale = 0.2;
  treasureBox1.visible = false;
  treasureBox2 = createSprite(random(100,1800),random(100,800));
  treasureBox2.addImage("treasureBox1",treasureBox);
  treasureBox2.scale = 0.2;
  treasureBox2.visible = false;
  treasureBox3 = createSprite(random(100,1800),random(100,800));
  treasureBox3.addImage("treasureBox1",treasureBox);
  treasureBox3.scale = 0.2;
  treasureBox3.visible = false;
  treasureBox4 = createSprite(random(100,1800),random(100,800));
  treasureBox4.addImage("treasureBox1",treasureBox);
  treasureBox4.scale = 0.2;
  treasureBox4.visible = false;

  Robber1.visible = false;
  Robber2.visible = false;

    Robbers = [Robber1,Robber2];
  
     
  
  }
  
  
  play() {
  form.hide();

  gun1.visible = true;
  gun2.visible = true;
  gun3.visible = true;
  gun4.visible = true;

  treasureBox1.visible = true;
  treasureBox2.visible = true;
  treasureBox3.visible = true;
  treasureBox4.visible = true;

  Robber1.visible = true;
  Robber2.visible = true;

 

  Player.getPlayerInfo();

  if(allPlayers !== undefined) {
    image(Board,displayWidth/25,displayHeight/19,displayWidth-200,displayHeight/1.3);
    var index = 0;

    var x; 
    var y;

    for(var plr in allPlayers) {
      index = index + 1;

      x = displayWidth - allPlayers[plr].distance;
      y = displayHeight - allPlayers[plr].distance;
 
       //Robbers[index-1].x = x;
       //Robbers[index-1].y = y;
    
      if(index === player.index) {
        stroke(10);
        fill("white");
        ellipse(x,y,40,40)
        Robbers[index-1].shapeColor = "red";
      }
     }
    }

   if(keyDown(RIGHT_ARROW) && player.index !== null) {
    player.distace +=50;
     player.update();
    }

  if(keyDown(UP_ARROW) && player.index !== null) {
    player.distance += 50;
    player.distance = displayWidth - player.distance;
    player.update();
    }
 
    if(player.distance > displayWidth - 50 && player.distance > displayHeight - 50) {
      gameState = 2;
      image(Winner,displayWidth/2,displayHeight + 100);
    }
    else {
    image(Loser,displayWidth/2,displayHeight + 100);
    }

   drawSprites();
  }

  

   end() {     
    console.log("GAME ENDED");
     
   }
  }