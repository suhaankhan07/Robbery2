const Engine = Matter.Engine;
const World= Matter.World;  
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = 0;
var allPlayers; 
 var backgroundImage;
 var form, player, game, rank;
 var playerCount;
 var dice,specialDice;
 var gun1,gun2,gun3,gun4;
 var treasureBox1,treasureBox2,treasureBox3,treasureBox4;
 var RobberyImg,PlayImg,RestartImg,Board, Robber, Winner, Loser, Pistol, treasureBox;
 var Robber1,Robber2,Robbers;
 //var index;

function preload() {
  RobberyImg = loadImage("images/Robbery.png");
  PlayImg = loadImage("images/play.png");
  RestartImg = loadImage("images/Restart.png");
  Board = loadImage("images/Board.jpg")
  Robber = loadImage("images/Robber.webp");
  Winner = loadImage("images/Winner.jpg")
  Loser = loadImage("images/Loser.jpg");
  Pistol = loadImage("images/pistol.png");
  treasureBox = loadImage("images/treasureBox.jpg");
 }

function setup() {
  database = firebase.database();
  createCanvas(displayWidth-100,displayHeight-200);
  engine = Engine.create();
  world = engine.world;  
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("white");  
  Engine.update(engine);

  if(playerCount === 2) {
    game.update(1);
    gameState = 1;
  }

  if(gameState === 1) {
    clear();
    game.play();
  }

  if(gameState === 2) {
    game.end();
  }
}
