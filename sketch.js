var dog
var happyDog
var database
var foodStock
var foodS

function preload()
{
 dogImage= loadImage("images/dogImg.png")
 happydogImage = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();
  dog = createSprite(250,250);

  dog.addImage(dogImage);
  dog.scale = 0.15;
  
  foodStock = database.ref('Food');
  foodStock.on('value', readStock);
}


function draw() {  
  background(46,139,87)
  drawSprites();
  
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happydogImage);
  }
  
  textSize(35);
  fill(15);
  stroke(25);
  text("food remaining:" + foodS,170,200);
  textSize(13);
  text("Press up arrow key to feed the dog",130,10,300,10)
}

function readStock(data) {

  foodS=data.val();
}

function writeStock(x) {
if(x<=0){
  x=0;
}else{
  x=x-1
}
  database.ref('/').update ({
    Food:x
  })
}
