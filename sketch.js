function setup() {
  setupBasic();
  //setupBezier();
}

function setupBasic() {
  createCanvas(windowWidth, windowHeight);
}

function setupBezier() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
}

function draw() {
  //playWithRepetitionOfCircles();
  drawWhenMousePressed(); 
  //drawBezierCurves();
}

function playWithRepetitionOfCircles(){
  var x = 1;
  ellipse(width/3, height/2, 50, 50);
  ellipse(width/2, height/2, 50, 50);
  ellipse(width/5, height/2, 50, 50);


  for (var x = 1; x <= 100; x++){
    //ellipse(width/x, height/2, 50, 50);
    ellipse(width/x-10,height/x-10, 20+x, 20+x);
    //ellipse(width/5, height/2, 50, 50);
  }

  for (var x = 1; x <= 50; x++ ){
   //ellipse(width/2, height/x, x, 100);
   //ellipse(width/3, height/x*2, 50, x*2);
   //ellipse(width/5, height/5, 100, 100); //iterate inplace
  }

}
function drawWhenMousePressed() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function drawBezierCurves() {
  background(0);
  for (var i = 0; i < 200; i += 20) {
    bezier(mouseX-(i/2.0), 40+i, 410, 20, 440, 300, 240-(i/16.0), 300+(i/8.0));
  }
}
