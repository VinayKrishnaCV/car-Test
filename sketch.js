var car,wall;
var weight,speed;

function setup() {
  createCanvas(1600,400);

  //defining speed and weight
  speed=random(55,90);
  weight=random(400,1500);

  //creating car
  car=createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  //creating wall
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
  //refreshing the screen
  background(255,255,255); 
  
  if(car.collide(wall)){
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;

    if (deformation<100){
      car.shapeColor = rgb(0,255,0);
    }else if(deformation>100&&deformation<180){
      car.shapeColor = rgb(255,234,0);
    }else if(deformation>180){
      car.shapeColor = rgb(255,0,0);
    }
  }

  drawSprites();
}