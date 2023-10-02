var sketch1 = function(p){
  p.preload = function(){
    p.img = p.loadImage("ros&cranzHang.jpg");
  }
  p.setup =function(){

    p.createCanvas(400,400);

  }

  p.draw = function(){

    p.background(0);
    p.image(p.img, 0, 0, 400, 400);

    p.ellipse(30,30,10,10);

 }

}

var sketch2 = function(p){
  p.preload = function(){
    p.img = p.loadImage("oande.jpg");
  }
  p.setup =function(){

    p.canvas = p.createCanvas(600,400);
    p.canvas.position(400, 400);

  }

  p.draw = function(){

    p.background(0);
    p.image(p.img, 0, 0, 600, 400);
    p.ellipse(30,30,10,10);

 }

}

var sketch3 = function(p){
  p.preload = function(){
    p.img = p.loadImage("prometheus.jpeg");
  }
    p.setup =function(){
  
      p.canvas = p.createCanvas(600,400);
      p.canvas.position(600, 200);
  
    }
  
    p.draw = function(){
  
      p.background(0);
      p.image(p.img, 0, 0, 600, 400);
      p.ellipse(30,30,10,10);
  
  }
}

var sketch4 = function(p){
  p.preload = function(){
    p.img = p.loadImage("purphib.jpg");
  }
    p.setup =function(){
  
      p.canvas = p.createCanvas(200,100);
      p.canvas.position(100, 600);
  
    }
  
    p.draw = function(){
  
      p.background(0);
      p.image(p.img, 0, 0, 600, 200);
      p.ellipse(30,30,10,10);
  
  }
}

var myp5 = new p5(sketch1);
var myp5 = new p5(sketch2);
var myp5 = new p5(sketch3);
var myp5 = new p5(sketch4);