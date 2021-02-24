var scribble;
var gui;


function setup() {
  createCanvas(windowWidth, windowHeight);
  scribble = new Scribble();

  gui = new Gui();
 
  let gui_setup = new dat.GUI();
  
 gui_setup.add(gui,'circles',1,10).step(1);
  gui_setup.add(gui,'distance',10,75).step(1);
  gui_setup.add(gui,'strokeWeight',1,10).step(1);

  
  
  noFill();
}

function draw() {
  background(100,50,20)
  
  swing = 10;
  cNum = 5;
  
  for(let i = windowWidth * .25; i <= windowWidth * .75; i+=windowWidth * .25){
    for(let y = windowHeight * .25; y <= windowHeight * .75; y+=windowHeight * .25){
  target(i,y,gui.distance,gui.circles);
  }
  }
  
  print(windowWidth/2 - 100,"mod");
  print(windowWidth/2,"width/2");
  noLoop();
}


function target(xPos,yPos,steps,num){
  

  for(var i = 0; i <= num; i++){

  strokeWeight(gui.strokeWeight);
 
  scribble.scribbleEllipse(xPos,yPos,steps*i,steps*i);
}
}

function mousePressed(){
  redraw();
}

function mouseDragged(){
  redraw();
}

function Gui(){
  this.circles = 4;
  this.distance = 50;
  this.strokeWeight = 3;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
