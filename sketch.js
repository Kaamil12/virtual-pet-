var dog
var happyDog
var database
var foodStock
var foodS

function preload()
{
  addImage(dog,"dogImg.png");
  addImage(happyDog,"dogImg1.png");
  foodStock = database.ref('Food');
  footStock.on('value', readStock);
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();
  
}


function draw() {  
  background(46,139,87)
  drawSprites();
  
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogImg1.png);
  }
  
  textSize(35);
  fill(15);
  stroke(25);
}

function readStock(data) {

  foodS=data.val();
}

function writeStock(x) {

  database.ref('/').update ({
    Food:x
  })
}