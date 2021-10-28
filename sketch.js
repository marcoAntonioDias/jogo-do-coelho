var garden,rabbit;
var gardenImg,rabbitImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){

  createCanvas(400,400);
  folha1=createsprite
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createapples ()
{
  apple = createsprite(random(50,350),40,10,10);
  apple.addimage(appleimg);
  aplle.scale=0.07;
  apple.velocityY=3;
  apple.lifetime=150;
  }
function createorange(){
orangeL=createSprite(random(50,350),40,10,10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY=3;
orangeL.lifetime=150;
}
function createred(){
redL=createsprite(random(50,350),40,10,10);
redL.addimage(redImg);
redL.scale=0.06;
redL.velocityY=3;
redL.lifetime=150;
}
var select_sprites = math.round(random(1,3));
if (framecount % 80 == 0){
  if (select_sprites == 1) {
    createapples ();
  }
  else if (select_sprites == 2) {
    createorange ();
  } else {
    createred ();
  }
}
rabbit.x = world.mouseX;
function draw() {
  background(0);
  

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
