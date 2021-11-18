
var trex ,trex_running;
var ground, ground_image;
var invisGround;
var cloud, cloud_image;
var obstacle, obstacle1_image, obstacle2_image, obstacle3_image,
obstacle4_image, obstacle5_image, obstace6_image


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png", "trex4.png")
  ground_image = loadImage("ground2.png")
  cloud_image = loadImage("cloud.png")
  obstacle1_image = loadImage("obstacle1.png")
  obstacle2_image = loadImage("obstacle2.png")
  obstacle3_image = loadImage("obstacle3.png")
  obstacle4_image = loadImage("obstacle4.png")
  obstacle5_image = loadImage("obstacle5.png")
  obstacle6_image = loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,100,10,10)
  trex.addAnimation("running",trex_running)
  trex.scale = 0.5

  //create ground
  ground = createSprite(300,180,600,20)
  ground.addImage(ground_image)
  ground.x = ground.width / 2

  //create invisible ground
  invisGround = createSprite(300,190,600,10)
  invisGround.visible = false

  var rand = Math.round(random(50,100))
  console.log(rand)
}

function draw(){
  background(180)
  
//trex jumping
  if (keyDown("space") && trex.y > 125) {
    trex.velocityY = - 10 
  }
 
  //adding gravity to the t-rex
  trex.velocityY  = trex.velocityY + 0.8

  //making ground infinte
  ground.velocityX = -3 
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  
  //console.log(frameCount)

  trex.collide(invisGround) 

  spawnObstacles()

  spawnClouds()

  drawSprites()
}

function spawnClouds() {
  
  if (frameCount % 60 == 0) {
    cloud = createSprite(600,100,10,10)
    cloud.velocityX = -5
    cloud.addImage(cloud_image)
    cloud.scale = 0.5
    cloud.y = Math.round(random(50,120))
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1

    cloud.lifetime = 200
  }
}

function spawnObstacles() {
  if (frameCount % 60 == 0) {
    obstacle = createSprite (600,165,10,10)
    obstacle.velocityX = -6
    var rand = Math.round(random(1,6))
    switch(rand) {
      case 1: obstacle.addImage(obstacle1_image)
              break;
      case 2: obstacle.addImage(obstacle2_image)
              break;
      case 3: obstacle.addImage(obstacle3_image)
              break;
      case 4: obstacle.addImage(obstacle4_image)
              break;
      case 5: obstacle.addImage(obstacle5_image)
              break;
      case 6: obstacle.addImage(obstacle6_image)
              break;
      default:
              break;
    }
    obstacle.scale = 0.5
    obstacle.lifetime = 200
  }
}
