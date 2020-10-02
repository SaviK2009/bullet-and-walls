var bullet,speed,weight;
var wall,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 
  bullet=createSprite(50,200,50,20);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=("grey");
  
}

function draw() {
  background("black"); 
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall))
  {
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
    bullet.velocityX=0;
    
    if(damage>10)
    {
      wall.shapeColor=("red");
    }

    if(damage<=10)
    {
      wall.shapeColor=("green");
    }
   
  }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.width;
wallLeftEdge=lwall.x;
if(lbullet.x - lwall.x < lwall.width/2 + lbullet.width/2
  &&lwall.x - lbullet.x  < lwall.width/2 + lbullet.width/2)
{
  return true
}
else{
  return false;
}

}