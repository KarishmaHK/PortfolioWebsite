var r = 0
var g = 0
var b = 0
let radio;
let slider;
var radius = 40;
var x = 110;
var speed = 5.5;
var direction = 1;
function setup() {
  createCanvas(1518, 120);
  ellipseMode(RADIUS);
  fill('yellow');
  noStroke();
  frameRate(30); // Thirty frames each second
  textAlign(CENTER);
  
}

function draw() {

  
  r = map(mouseX, 0, 600, 0, 255)
  g = map(mouseX, 0, 600, 255, 0)
  b = map(mouseY, 0, 600, 255, 0)

  background(r, g, b);
  
  ellipse(mouseX, mouseY, 2, 2);
  background(r, g, b);
  
  ellipse(mouseX, mouseY, 2, 2);


  
  

  
  x += speed * direction;
  if ((x > width-radius) || (x < radius)) {
    direction = -direction; // Flip direction
  }
  if (direction == 1) {
    arc(x, 60, radius, radius, 0.52, 5.76); // Face right
  }
  else {
    arc(x, 60, radius, radius, 3.67, 8.9); // Face left
  }
  for(let i=0;i<9;i++){
      arc(x, 60, radius, radius, x , 8.0);
  }
}